import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MigrationService {
  // Your existing migration endpoint
  private baseUrl = 'http://localhost:7272/migrate';

  // The endpoint for your database connection controller
  private dbUrl = 'http://localhost:7272/database';

  constructor(private http: HttpClient) { }

  // 🌟 NEW: Method to connect to either Postgres or Oracle
  connectToDatabase(config: any): Observable<any> {
    return this.http.post(`${this.dbUrl}/connect`, config);
  }

  // Method to fetch the Oracle tables dynamically
  fetchSourceTables(): Observable<{success: boolean, count: number, data: string[]}> {
    return this.http.get<{success: boolean, count: number, data: string[]}>(`${this.dbUrl}/tables/oracle`);
  }

  // --- Your Existing Methods Below ---

  migrateTable(tableName: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/${tableName}`, {});
  }

  checkDependencySync(tableName: string, dependencies: string[]): Observable<{ isSynced: boolean, mismatched: string[] }> {
    return this.http.post<{ isSynced: boolean, mismatched: string[] }>(
      `${this.baseUrl}/check-sync`,
      { tableName, dependencies }
    );
  }

  checkIfTableIsSynced(tableName: string): Observable<{ isSynced: boolean, oracleCount: number, pgCount: number }> {
    return this.http.get<{ isSynced: boolean, oracleCount: number, pgCount: number }>(`${this.baseUrl}/check-single-sync/${tableName}`);
  }
}
