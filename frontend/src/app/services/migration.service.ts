import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MigrationService {
  // Base path for migration operations
  private baseUrl = 'http://localhost:7272/migrate';

  constructor(private http: HttpClient) { }

  /**
   * Connects to the Oracle Database
   * Maps to POST /migrate/connectOracleDB
   */
  // connectToOracle(config: any): Observable<any> {
  //   console.log('Attempting Oracle connection with:', { host: config.host, port: config.port, user: config.username, database: config.database });
  //   return this.http.post(`${this.baseUrl}/connectOracleDB`, config);
  // }

  // Add this to your MigrationService class
  // connectToPostgres(config: any): Observable<any> {
  //   return this.http.post('http://localhost:7272/database-mapping/connect-server', config);
  // }

  connectToOracle(fullPayload: any): Observable<any> {
    // Now logging the specific oracle configuration from the nested object
    console.log('Attempting Oracle connection with:', fullPayload.oracle);

    // Sending the entire payload (oracle + postgres) to the backend
    return this.http.post(`${this.baseUrl}/connectOracleDB`, fullPayload);
  }

  /**
   * Triggers the main migration script
   * Maps to POST /migrate/script
   */
  initializeMigration(config: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/script`, config);
  }

  /**
   * Fetches the source tables from Oracle
   */
  // Update this in MigrationService (Angular)
  fetchSourceTables(fullPayload: any): Observable<any> {
    // Send the fullPayload (oracle + postgres) so the backend can connect
    return this.http.post(`${this.baseUrl}/tables/oracle`, fullPayload);
  }

  /**
   * Migrates a specific table
   */
  migrateTable(tableName: string, fullPayload: any): Observable<any> {
    // This will now hit: http://localhost:7272/migrate/SCHEMAST
    return this.http.post(`${this.baseUrl}/${tableName}`, fullPayload);
  }

  /**
   * Checks for dependency sync issues
   */
  // checkDependencySync(tableName: string, dependencies: string[]): Observable<{ isSynced: boolean, mismatched: string[] }> {
  //   return this.http.post<{ isSynced: boolean, mismatched: string[] }>(
  //     `${this.baseUrl}/check-sync`,
  //     { tableName, dependencies }
  //   );
  // }
  checkDependencySync(tableName: string, dependencies: string[], fullPayload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/check-sync`, {
      tableName,
      dependencies,
      oracle: fullPayload.oracle
    });
  }
  // checkDependencySync(
  //   tableName: string,
  //   dependencies: string[],
  //   fullPayload: any
  // ): Observable<{ isSynced: boolean, mismatched: string[] }> {

  //   return this.http.post<{ isSynced: boolean, mismatched: string[] }>(
  //     `${this.baseUrl}/check-sync`,
  //     {
  //       tableName,
  //       dependencies,
  //       oracle: fullPayload.oracle
  //     }
  //   );
  // }


  /**
   * Checks if a single table is synchronized
   */
  // src/app/services/migration.service.ts
  checkIfTableIsSynced(tableName: string, fullPayload: any): Observable<any> {
    // Use POST to carry the configuration payload
    return this.http.post(`${this.baseUrl}/check-single-sync/${tableName}`, fullPayload);
  }

  //   /**
  //  * Delete & Sequence
  //  */
  //   deleteAndSequence(formData: FormData): Observable<any> {
  //     return this.http.post(
  //       `${this.baseUrl}/delete-sequence`,
  //       formData
  //     );
  //   }
  executeDeleteSequence(formData: FormData) {
    return this.http.post(
      `${this.baseUrl}/delete-sequence`,
      formData
    );
  }
}

