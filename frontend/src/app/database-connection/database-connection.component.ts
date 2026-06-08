import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { MigrationService } from '../services/migration.service';

@Component({
  selector: 'app-database-connection',
  templateUrl: './database-connection.component.html',
  styleUrls: ['./database-connection.component.css']
})
export class DatabaseConnectionComponent {

  isLoading = false;
  errorMessage = '';

  selectedSourceDb = 'postgres';
  selectedTargetDb = 'oracle';

  sourceConfig = {
    type: 'postgres',
    host: '',
    port: '',
    username: '',
    password: '',
    database: ''
  };

  targetConfig = {
    type: 'oracle',
    host: '',
    port: '',
    username: '',
    password: '',
    database: ''
  };

  constructor(
    private router: Router,
    private migrationService: MigrationService
  ) { }

  // connect() {

  //   this.isLoading = true;
  //   this.errorMessage = '';

  //   console.log('Source Config:', this.sourceConfig);
  //   console.log('Target Config:', this.targetConfig);

  //   forkJoin({
  //     // source: this.migrationService.connectToPostgres(this.sourceConfig),
  //     target: this.migrationService.connectToOracle(this.targetConfig)
  //   }).subscribe({
  //     next: (response) => {

  //       console.log('Connections Successful', response);

  //       const payload = {
  //         oracle: {
  //           host: this.targetConfig.host,
  //           port: Number(this.targetConfig.port),
  //           username: this.targetConfig.username,
  //           password: this.targetConfig.password,
  //           sid: this.targetConfig.database
  //         },

  //         postgres: {
  //           type: this.sourceConfig.type,
  //           host: this.sourceConfig.host,
  //           port: Number(this.sourceConfig.port),
  //           username: this.sourceConfig.username,
  //           password: this.sourceConfig.password,
  //           database: this.sourceConfig.database
  //         }
  //       };

  //       this.migrationService
  //         .initializeMigration(payload)
  //         .subscribe({

  //           next: () => {

  //             localStorage.setItem(
  //               'migrationPayload',
  //               JSON.stringify(payload)
  //             );

  //             localStorage.setItem(
  //               'sourceConfig',
  //               JSON.stringify(this.sourceConfig)
  //             );

  //             localStorage.setItem(
  //               'targetConfig',
  //               JSON.stringify(this.targetConfig)
  //             );

  //             this.isLoading = false;

  //             this.router.navigate(['/migration']);
  //           },

  //           error: (err) => {
  //             this.isLoading = false;
  //             this.errorMessage = 'Failed to initialize migration';
  //             console.error(err);
  //           }

  //         });
  //     },
  //     error: (err) => {
  //       this.isLoading = false;
  //       this.errorMessage = 'Failed to connect to one or both databases';
  //       console.error(err);
  //     }
  //   });
  // }

  connect() {
    this.isLoading = true;
    this.errorMessage = '';

    const fullPayload = {
      oracle: {
        type: 'oracle',
        host: this.targetConfig.host,
        port: Number(this.targetConfig.port),
        username: this.targetConfig.username,
        password: this.targetConfig.password,
        database: this.targetConfig.database
      },
      postgres: {
        type: this.sourceConfig.type,
        host: this.sourceConfig.host,
        port: Number(this.sourceConfig.port),
        username: this.sourceConfig.username,
        password: this.sourceConfig.password,
        database: this.sourceConfig.database
      }
    };

    // Only connect to verify credentials. 
    // DO NOT call initializeMigration here.
    this.migrationService.connectToOracle(fullPayload).subscribe({
      next: (response) => {
        console.log('Connections Successful', response);

        // Persist configuration so individual table buttons can use it
        localStorage.setItem('migrationPayload', JSON.stringify(fullPayload));
        localStorage.setItem('sourceConfig', JSON.stringify(this.sourceConfig));
        localStorage.setItem('targetConfig', JSON.stringify(this.targetConfig));

        // Just navigate to the dashboard. 
        // The individual buttons will handle the actual migration later.
        this.isLoading = false;
        this.router.navigate(['/migration']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to connect to one or both databases';
        console.error(err);
      }
    });
  }

  cancel() {
    this.router.navigate(['/login']);
  }
}