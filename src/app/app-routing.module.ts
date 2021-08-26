import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { QuestionnairesComponent } from './pages/questionnaires/questionnaires.component';
import { VendorsComponent } from './pages/vendors/vendors.component';
import { UploadsComponent } from './pages/uploads/uploads.component';
import { TestPage2Component } from './pages/test-page2/test-page2.component';
import { SettingsComponent } from './pages/settings/settings.component';


const routes: Routes = [
    {
		path : '',
		pathMatch : 'full',
		component : LoginComponent
	},
    {
		path : 'login',
		pathMatch : 'full',
		component : LoginComponent
	},
    {
		path : 'register',
		pathMatch : 'full',
		component : RegisterComponent
	},
	{
		path : 'dashboard',
		pathMatch : 'full',
		component : DashboardComponent
	},
	{
		path : 'questionnaires',
		pathMatch : 'full',
		component : QuestionnairesComponent
	},
	{
		path : 'vendors',
		pathMatch : 'full',
		component : VendorsComponent
	},
	{
		path : 'uploads',
		pathMatch : 'full',
		component : UploadsComponent
	},
	{
		path : 'test-page2',
		pathMatch : 'full',
		component : TestPage2Component
	},
	{
		path : 'settings',
		pathMatch : 'full',
		component : SettingsComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
