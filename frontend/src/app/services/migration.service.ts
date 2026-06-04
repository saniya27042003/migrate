import { Injectable } from '@angular/core'; // Ensure this import is correct
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // <--- This MUST be inside the @Injectable decorator
})
export class MigrationService {
  private baseUrl = 'http://localhost:7272/migrate';

  constructor(private http: HttpClient) { }

  migrateTable(tableName: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/${tableName}`, {});
  }

  checkDependencySync(tableName: string, dependencies: string[]): Observable<{ isSynced: boolean, mismatched: string[] }> {
    return this.http.post<{ isSynced: boolean, mismatched: string[] }>(
      `${this.baseUrl}/check-sync`,
      { tableName, dependencies }
    );
  }
}