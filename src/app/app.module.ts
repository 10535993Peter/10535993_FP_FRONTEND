import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
// import { AdvertPageComponent } from './pages/advert-page/advert-page.component';
import { AppProvider } from './app.init.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './widgets/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TestPage2Component } from './pages/test-page2/test-page2.component';
import { QuestionnairesComponent } from './pages/questionnaires/questionnaires.component';
import { VendorsComponent } from './pages/vendors/vendors.component';
import { UploadsComponent } from './pages/uploads/uploads.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PieChartComponent } from './widgets/pie-chart/pie-chart.component';
// import { NewUserComponent } from './pages/newuser/newuser.component';


export function userProvider(provider: AppProvider) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    TestPage2Component,
    QuestionnairesComponent,
    VendorsComponent,
    UploadsComponent,
    SettingsComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: userProvider, deps: [AppProvider], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
