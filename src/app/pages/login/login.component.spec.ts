import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppComponent} from "../../app.component";

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import * as $ from "jquery";
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserService } from 'src/app/services/user-service/user.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let app: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [AppComponent, UserService],
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
    $('.username').text("Peter");
  });

  it('should contain one login form', ()=>{
    expect($(fixture.nativeElement).find('class[name=loginForm]')).not.toBeNull();
  });

  it('should contain one username field and it initiates as an empty field', ()=>{
    expect($(fixture.nativeElement).find('.username').length).toBe(1);
    expect($(fixture.nativeElement).find('.username').val()).toEqual("");
  });

  it('should contain one password field and it initiates as an empty field', ()=>{
    expect($(fixture.nativeElement).find('.password').length).toBe(1);
    expect($(fixture.nativeElement).find('.password').val()).toEqual("");
  });

  it('should contain the register link', ()=>{
    expect($(fixture.nativeElement).find('.registerLink').length).toBe(1);
  });

  it('should require username and password input at login click', ()=>{
    expect($(fixture.nativeElement).find('.username').val()).toEqual("");
    expect($(fixture.nativeElement).find('.password').val()).toEqual("");
    $(fixture.nativeElement).find('.login').trigger('click');
    expect(component.error).toBe("Both email and password are required to login");
  });

  it('should validate email address syntax', ()=>{
    $(fixture.nativeElement).find('.username').val("IncorrectEmail");
    $(fixture.nativeElement).find('.password').val("TestPassword");
    expect($(fixture.nativeElement).find('.username').val()).toEqual("IncorrectEmail");
    expect($(fixture.nativeElement).find('.password').val()).toEqual("TestPassword");
    $(fixture.nativeElement).find('.login').trigger('click');
    expect(component.error).toBe("Please input a valid email address");
  });

  it('should accept correctly formatted input values', ()=>{
    $(fixture.nativeElement).find('.username').val("Jenny.Reid@hotmail.com");
    $(fixture.nativeElement).find('.password').val("stocks9");
    expect($(fixture.nativeElement).find('.username').val()).toEqual("Jenny.Reid@hotmail.com");
    expect($(fixture.nativeElement).find('.password').val()).toEqual("stocks9");
    $(fixture.nativeElement).find('.login').trigger('click');
    expect(component.app.navigateToUrl).toHaveBeenCalled();
    //expect($(fixture.nativeElement).find('.error-label textCenter').hasClass('error')).toBe(true);
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
  //   component.userService.login(this.username['testuser'], this.password['password']);
  //   component.loginForm.controls['password'].setValue('123');
  //   loginElement.triggerEventHandler('ngSubmit', null);
  //   expect(loginSpy).toHaveBeenCalledTimes(1); // check that service is called once
  //  }));

});
