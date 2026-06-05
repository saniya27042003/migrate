import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 1. Import all three of your components
import { LoginComponent } from './login/login.component';
import { DatabaseConnectionComponent } from './database-connection/database-connection.component'; // Make sure this path matches your folder structure
import { MigrationDashboardComponent } from './components/migration-dashboard/migration-dashboard.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  // 2. Assign the Database Connection component here
  { path: 'database', component: DatabaseConnectionComponent, canActivate: [AuthGuard] },

  // 3. Keep the Migration Dashboard here
  { path: 'migration', component: MigrationDashboardComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
