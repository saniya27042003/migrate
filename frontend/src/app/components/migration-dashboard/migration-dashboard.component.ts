import { Component, OnInit } from '@angular/core';
import { MigrationService } from 'src/app/services/migration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-migration-dashboard',
  templateUrl: './migration-dashboard.component.html',
  styleUrls: ['./migration-dashboard.component.css']
})
export class MigrationDashboardComponent implements OnInit {

  // --- 1. State Tracking ---
  // Using a Set to track successfully migrated tables
  migratedTables: Set<string> = new Set();
  selectedParent: string | null = null;
  isLoading: boolean = false; // Add this flag
  progress: number = 0;

  // --- 2. Configuration Lists ---
  foundationTables: string[] = ['SCHEMAST', 'ACMASTER', 'IDMASTER', 'DPMASTER', 'PGMASTER', 'SHMASTER', 'LNMASTER'];

  coreEntities: string[] = [
    'IDMASTER', 'DPMASTER', 'PGMASTER', 'SHMASTER', 'LNMASTER'
  ];

  dependencyMap: { [key: string]: string[] } = {
    'IDMASTER': ['OCCUPATIONMASTER', 'CASTMASTER', 'RISKCATEGORYMASTER'],
    'DPMASTER': ['CATEGORYMASTER', 'BALACATA', 'OPERATIONMASTER', 'INTCATEGORYMASTER',],
    'PGMASTER': ['CATEGORYMASTER', 'BALACATA', 'OPERATIONMASTER', 'INTCATEGORYMASTER',],
    'SHMASTER': [],
    'LNMASTER': ['AUTHORITYMASTER', 'PRIORITYMASTER', 'WEAKERMASTER', 'PURPOSEMASTER', 'INDUSTRYMASTER', 'HEALTHMASTER',]
  };

  constructor(private migrationService: MigrationService) { }

  ngOnInit(): void { }

  /**
   * Triggers the migration service. 
   * On success, marks the table as migrated and forces UI update.
   */
  startMigration(tableName: string) {
    this.isLoading = true;
    this.progress = 0;

    // Simulate progress
    const interval = setInterval(() => {
      if (this.progress < 90) this.progress += 10;
    }, 500);

    this.migrationService.migrateTable(tableName).subscribe({
      next: () => {
        clearInterval(interval);
        this.progress = 100;
        this.isLoading = false;

        // Use SweetAlert2 for success
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: `${tableName} migration successful!`,
          timer: 2000
        });

        this.migratedTables.add(tableName);
        this.migratedTables = new Set(this.migratedTables);
      },
      error: (err) => {
        clearInterval(interval);
        this.isLoading = false;

        // Use SweetAlert2 for errors
        Swal.fire({
          icon: 'error',
          title: 'Migration Failed',
          text: err.error?.error || 'Migration failed',
        });
      }
    });
  }

  /**
   * UI Helper: Checks if table is in the migrated set
   */
  isMigrated(table: string): boolean {
    return this.migratedTables.has(table);
  }

  /**
   * UI Helper: Logic for the "Lock" mechanism.
   * Returns TRUE only if every dependency in the map exists in the migrated Set.
   */
  canMigrateMaster(master: string): boolean {
    const deps = this.dependencyMap[master] || [];

    // If there are no dependencies, it's always ready to migrate
    if (deps.length === 0) return true;

    // Returns true if every single dependency is found in our migrated set
    return deps.every(dep => this.migratedTables.has(dep));
  }



  // Add these to your MigrationDashboardComponent class
  validationError: string | null = null;
  isChecking: boolean = false;

  // Call this whenever the selectedParent changes
  checkTableSync(master: string) {
    const deps = this.dependencyMap[master] || [];
    if (deps.length === 0) {
      this.validationError = null;
      return;
    }

    this.isChecking = true;
    this.validationError = null;

    // Use your existing service to call the new endpoint
    this.migrationService.checkDependencySync(master, deps).subscribe({
      next: (res: { isSynced: boolean, mismatched: string[] }) => {
        this.isChecking = false;
        if (!res.isSynced) {
          this.validationError = `Migration blocked! Count mismatch in: ${res.mismatched.join(', ')}`;
        }
      },
      error: (err) => {
        this.isChecking = false;
        console.error(err);
      }
    });
  }
}