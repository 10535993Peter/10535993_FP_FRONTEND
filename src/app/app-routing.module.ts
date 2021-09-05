import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { QuestionnairesComponent } from './pages/questionnaires/questionnaires.component';
import { VendorsComponent } from './pages/vendors/vendors.component';
import { UploadsComponent } from './pages/uploads/uploads.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { QuestionnairebuilderComponent } from './questionnairebuilder/questionnairebuilder.component';


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
		path : 'users',
		pathMatch : 'full',
		component : UserComponent
	},
	{
		path : 'dashboard',
		pathMatch : 'full',
		component : DashboardComponent
	},
	{
		path : 'questionnairebuilder',
		pathMatch : 'full',
		component : QuestionnairebuilderComponent
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
