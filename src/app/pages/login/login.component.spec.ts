import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppComponent} from "../../app.component";

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import * as $ from "jquery";
import { AppRoutingModule } from 'src/app/app-routing.module';

// added AppComponent
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [AppComponent],
      imports: [FormsModule, AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    $('.email').text("Peter");
  });

  
  //tests added:

  it('should contain one login form', ()=>{
    expect($(fixture.nativeElement).find('class[name=loginForm]')).not.toBeNull();
  });

  it('should contain one email field and it initiates as an empty field', ()=>{
    expect($(fixture.nativeElement).find('.email').length).toBe(1);
    expect($(fixture.nativeElement).find('.email').val()).toEqual("");
  });

  it('should contain one password field and it initiates as an empty field', ()=>{
    expect($(fixture.nativeElement).find('.password').length).toBe(1);
    expect($(fixture.nativeElement).find('.password').val()).toEqual("");
  });


  it('should require email and password input at login click', ()=>{
    expect($(fixture.nativeElement).find('.email').val()).toEqual("");
    expect($(fixture.nativeElement).find('.password').val()).toEqual("");
    $(fixture.nativeElement).find('.login').trigger('click');
    expect(component.error).toBe("Both email and password are required to login");
  });

  //I changed the above syntax to the below for the second error to test the variation and see how both work
  it('should validate email address syntax', ()=>{
    component.email = "IncorrectEmail";
    component.password = "TestPassword";
    $('.login').click();
    expect(component.error).toBe("Please input a valid email address");
  });

  it('should accept correctly formatted input values and navigate to next page', ()=>{
    component.email = "Jenny.Reid@hotmail.com";
    component.password = "stocks9";
    $('.login').click();
    expect(component.error).toBe("");
  });








  //registerLink
  //error-label textCenter

  // it('should allow a valid email address', () => {
  //   const fixture = TestBed.createComponent(LoginComponent);
  //   const login = fixture.componentInstance;
  //   login = 
  //   expect(login.login).to('/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/');
  // });

  // it('should throw an error for an invalid email address', () => {
  //   const fixture = TestBed.createComponent(LoginComponent);
  //   const login = fixture.componentInstance;
  //   login = 
  //   expect(login.login).to('/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/');
  // });


  //   expect($(fixture.nativeElement).find('input#userName').val()).toEqual("peter");
  //   $(fixture.nativeElement).find('.login').trigger('click');
  //   expect($(fixture.nativeElement).find('.error-label textCenter').hasClass('error-label textCenter')).toBe(false);
  //   expect($(fixture.nativeElement).find('.error-label textCenter').text()).toEqual("Please input a valid email address");

  //   $(fixture.nativeElement).find('input#userName').val("peadarfloyd@gmail.com");
  //   $(fixture.nativeElement).find('.loginButton').trigger('click');
  //   expect($(fixture.nativeElement).find('.error-label textCenter').hasClass('.error-label textCenter')).toBe(true);


  // fit('should display error message', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const login = '';
  //   expect('.error').toEqual('Both email and password are required to login');
  // });

  // it('should call login method', () => {
  //   let loginElement: DebugElement;
  //   const debugElement = fixture.debugElement;
  //   userService = debugElement.injector.get(UserService);
  //   loginSpy = spyOn(authService , 'loginByUsernameAndPassword').and.callThrough();
  //   loginElement = fixture.debugElement.query(By.css('form'));
  //   // to set values
  //   component.userService.login(this.email['testuser'], this.password['password']);
  //   component.loginForm.controls['password'].setValue('123');
  //   loginElement.triggerEventHandler('ngSubmit', null);
  //   expect(loginSpy).toHaveBeenCalledTimes(1); // check that service is called once
  //  }));

});
