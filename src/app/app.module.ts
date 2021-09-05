import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { AppProvider } from './app.init.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './widgets/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuestionnairesComponent } from './pages/questionnaires/questionnaires.component';
import { VendorsComponent } from './pages/vendors/vendors.component';
import { UploadsComponent } from './pages/uploads/uploads.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PieChartComponent } from './widgets/pie-chart/pie-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionnairebuilderComponent } from './questionnairebuilder/questionnairebuilder.component';



export function userProvider(provider: AppProvider) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    DashboardComponent,
    HeaderComponent,
    QuestionnairesComponent,
    VendorsComponent,
    UploadsComponent,
    SettingsComponent,
    PieChartComponent,
    QuestionnairebuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: userProvider, deps: [AppProvider], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
