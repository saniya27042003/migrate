import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DbStateService } from '../services/db-state.service';
import { MigrationService } from '../services/migration.service';

interface ClientDbConfig {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database?: string;     // optional
  serviceName?: string; // optional (Oracle)
}

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  databases = [
    { name: 'MySQL', img: 'assets/images/mysql.png' },
    { name: 'MsSQL', img: 'assets/images/mssql.png' },
    { name: 'Postgres', img: 'assets/images/postgres.png' },
    { name: 'MariaDB', img: 'assets/images/mariadb2(2).png' },
    { name: 'MongoDB', img: 'assets/images/mongodb.png' },
    { name: 'Oracle', img: 'assets/images/oracle.png' },
  ];

  primaryForm!: FormGroup;
  clientForm!: FormGroup;
  selectedDatabase: string = '';
  databaseList: string[] = [];
  primaryClassMap: { [key: string]: string } = {};
  clientClassMap: { [key: string]: string } = {};
  loadingDatabases = false;
  isConnecting = false;

  messageBox = {
    visible: false,
    text: '',
    type: 'success' as 'success' | 'error'
  };

  navigateAfterSuccess = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private dbState: DbStateService,
    private migrationService: MigrationService,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        localStorage.setItem('auth_token', token);
      } else {
        const saved = localStorage.getItem('auth_token');
        if (!saved) {
          this.router.navigate(['/login']);
        }
      }
    });

    this.primaryForm = this.fb.group({
      host: ['', Validators.required],
      port: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.clientForm = this.fb.group({
      type: ['', Validators.required],
      host: ['', Validators.required],
      port: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      database: ['', Validators.required],
    });

    if (this.dbState.primaryForm) {
      this.primaryForm.patchValue(this.dbState.primaryForm);
      this.clientForm.patchValue(this.dbState.clientForm);
      this.selectedDatabase = this.dbState.selectedDatabase;
      this.databaseList = this.dbState.databaseList;
      this.primaryClassMap = this.dbState.primaryClassMap;
      this.clientClassMap = this.dbState.clientClassMap;
    }
  }

  selectPrimary(dbName: string) {
    this.primaryClassMap = {};
    this.primaryClassMap[dbName] = 'ring-4 ring-green-400';
  }

  selectClient(dbName: string) {
    this.clientClassMap = {};
    this.clientClassMap[dbName] = 'ring-4 ring-green-400';
    const typeMap: any = {
      MySQL: 'mysql', MsSQL: 'mssql', Postgres: 'postgres',
      MariaDB: 'mariadb', MongoDB: 'mongodb', Oracle: 'oracle'
    };
    this.clientForm.patchValue({ type: typeMap[dbName] });
  }

  onOpenDatabaseDropdown() {
    if (this.primaryForm.invalid) {
      this.showMessage('Enter Host, Port, Username, and Password first.', 'error');
      return;
    }
    if (this.databaseList.length > 0) return;

    const payload = this.primaryForm.value;
    this.loadingDatabases = true;

    this.http.post<string[]>('http://localhost:7272/database-mapping/server/databases', payload)
      .subscribe({
        next: (res) => {
          this.loadingDatabases = false;
          this.databaseList = res;
          if (this.databaseList.length === 0) this.showMessage('No databases found.', 'error');
        },
        error: (err) => {
          this.loadingDatabases = false;
          this.showMessage('Could not fetch databases.', 'error');
        }
      });
  }

  onOkClick() {
    if (this.primaryForm.invalid || !this.selectedDatabase || this.clientForm.invalid) {
      this.showMessage('Please fill all fields correctly.', 'error');
      return;
    }

    this.isConnecting = true;

    // Build the payload once
    const payload = {
      oracle: {
        host: this.clientForm.value.host,
        port: Number(this.clientForm.value.port),
        username: this.clientForm.value.username,
        password: this.clientForm.value.password,
        service: this.clientForm.value.database
      },
      postgres: {
        host: this.primaryForm.value.host,
        port: Number(this.primaryForm.value.port),
        username: this.primaryForm.value.username,
        password: this.primaryForm.value.password,
        database: this.selectedDatabase
      }
    };

    // Make only the one valid call
    this.migrationService.connectToOracle(payload).subscribe({
      next: (res: any) => {
        this.isConnecting = false;
        this.navigateAfterSuccess = true;
        this.showMessage('Both Server & Client Connected Successfully!', 'success');
      },
      error: (err) => {
        this.isConnecting = false;
        this.showMessage('Connection failed: ' + (err.error?.message || 'Check logs'), 'error');
      }
    });
  }
  onCancelClick() {
    this.primaryForm.reset();
    this.clientForm.reset();
    this.selectedDatabase = '';
    this.databaseList = [];
    this.primaryClassMap = {};
    this.clientClassMap = {};
    this.dbState.clear();
  }

  showMessage(text: string, type: 'success' | 'error') {
    this.messageBox.text = text;
    this.messageBox.type = type;
    this.messageBox.visible = true;
  }

  closeMessageBox() {
    this.messageBox.visible = false;
    if (this.navigateAfterSuccess) {
      this.navigateAfterSuccess = false;
      this.router.navigate(['/table'], {
        queryParams: {
          primary: this.selectedDatabase,
          client: this.clientForm.value.database,
          clientType: this.clientForm.value.type
        }
      });
    }
  }
}