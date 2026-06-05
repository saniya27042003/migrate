import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { MigrationService } from '../services/migration.service'; // Make sure this path points to your service

@Component({
  selector: 'app-database-connection',
  templateUrl: './database-connection.component.html',
  styleUrls: ['./database-connection.component.css']
})
export class DatabaseConnectionComponent {

  // 🌟 THESE FIX YOUR HTML ERRORS
  isLoading: boolean = false;
  errorMessage: string = '';

  // Hardcoded active databases
  selectedSourceDb: string = 'postgres';
  selectedTargetDb: string = 'oracle';

  // Source locked to PostgreSQL
  sourceConfig = {
    type: 'postgres',
    host: '',
    port: '',
    username: '',
    password: '',
    database: ''
  };

  // Target locked to Oracle
  targetConfig = {
    type: 'oracle',
    host: '',
    port: '',
    username: '',
    password: '',
    database: ''
  };

  // 🌟 INJECT ROUTER AND SERVICE HERE
  constructor(
    private router: Router,
    private migrationService: MigrationService
  ) {}

  // Triggered when the user clicks Connect
  connect() {
    // 1. Start the loading spinner and clear old errors
    this.isLoading = true;
    this.errorMessage = '';

    console.log('Connecting Source (Postgres)...', this.sourceConfig);
    console.log('Connecting Target (Oracle)...', this.targetConfig);

    // 2. forkJoin sends BOTH requests at the same time and waits for both to finish
    forkJoin({
      source: this.migrationService.connectToDatabase(this.sourceConfig),
      target: this.migrationService.connectToDatabase(this.targetConfig)
    }).subscribe({
      next: (results) => {
        // 3. Both succeeded! Turn off loading and navigate to dashboard
        this.isLoading = false;
        console.log('Both connections successful!', results);
        this.router.navigate(['/migration']);
      },
      error: (err) => {
        // 4. One or both failed. Turn off loading and show the error on the UI
        this.isLoading = false;
        this.errorMessage = err.error?.message || 'Failed to connect. Please check your credentials and database ports.';
        console.error('Connection failed:', err);
      }
    });
  }

  cancel() {
    console.log('Connection cancelled');
    this.router.navigate(['/login']); // Route back to login
  }
}
