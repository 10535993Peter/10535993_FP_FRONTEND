import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AdvertsComponent } from './pages/adverts/adverts.component';
import { HeaderComponent } from './widgets/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { UserService } from './services/user-service/user.service';
import { ApiService } from './services/api-service/api.service';

describe('AppComponent', () => {
  let component: LoginComponent;
  let service: UserService;
  let fixture: ComponentFixture<AppComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent
      ],
      providers: [ApiService, UserService, AdvertsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();    
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ca-frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ca-frontend');
  });

  //tests added:

  it('should have router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.nativeElement.querySelector('router-outlet')).not.toBeNull();
  });

  // it('if user is null, then go to login page', () => {
  //   service = new UserService();
  //   component = new LoginComponent(service);
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   app.user = null;
    //expect(app.user).toEqual(null);
    //let user = User;
    // AppComponent.user = null;
    // fixture.nativeElement.ngOnInit(user);
    //expect(app.ngOnInit(app.navigateToUrl('/login'))).toBe(true);
  //});

  // it('#isLoginRequired() should return true when not authenticated', () => {
  //   spy = spyOn(service, 'isLoggedIn').and.returnValue(false);
  //   expect(component.isLoginRequired()).toBeTruthy();
  // });
  
  // it('#isLoginRequired() should return false when authenticated', () => {
  //   spy = spyOn(service, 'isLoggedIn').and.returnValue(true);
  //   expect(component.isLoginRequired()).toBeFalsy();
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('ca-frontend app is running');
  // });


  // ngOnInit(){
  //   if(this.user == null){
  //     this.navigateToUrl('/login');
  //   } else {
  //     this.navigateToUrl('/home');
  //   }
  // }


  // it('should navigate to /login', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const user = null;
  //   expect(user).toBe(navigateToUrl('/login'))

  //   component.ngOnInit();

  // });

});
