import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbStateService {
  primaryForm: any = null;
  clientForm: any = null;
  selectedDatabase: string | null = null;
  databaseList: any[] = [];
  primaryClassMap: any = {};
  clientClassMap: any = {};

  constructor() { }

  // Save form state
  savePrimaryForm(formValue: any) {
    this.primaryForm = formValue;
  }

  saveClientForm(formValue: any) {
    this.clientForm = formValue;
  }

  saveSelectedDatabase(database: string) {
    this.selectedDatabase = database;
  }

  saveDatabaseList(list: any[]) {
    this.databaseList = list;
  }

  savePrimaryClassMap(map: any) {
    this.primaryClassMap = map;
  }

  saveClientClassMap(map: any) {
    this.clientClassMap = map;
  }

  // Clear all state
  clear() {
    this.primaryForm = null;
    this.clientForm = null;
    this.selectedDatabase = null;
    this.databaseList = [];
    this.primaryClassMap = {};
    this.clientClassMap = {};
  }
}
