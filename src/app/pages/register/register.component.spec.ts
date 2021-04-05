import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/services/user-service/user.service';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      providers: [AppComponent, UserService],
      imports: [FormsModule, AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain one register form', ()=>{
    expect($(fixture.nativeElement).find('class[name=registerForm]')).not.toBeNull();
  });

  it('should contain one firstname field and it initiates as an empty field', ()=>{
    expect($(fixture.nativeElement).find('.firstname').length).toBe(1);
    expect($(fixture.nativeElement).find('.firstname').val()).toEqual("");
  });

  it('should contain one lastname field and it initiates as an empty field', ()=>{
    expect($(fixture.nativeElement).find('.lastname').length).toBe(1);
    expect($(fixture.nativeElement).find('.lastname').val()).toEqual("");
  });

  it('should contain one username field and it initiates as an empty field', ()=>{
    expect($(fixture.nativeElement).find('.username').length).toBe(1);
    expect($(fixture.nativeElement).find('.username').val()).toEqual("");
  });

  it('should contain one password field and it initiates as an empty field', ()=>{
    expect($(fixture.nativeElement).find('.password').length).toBe(1);
    expect($(fixture.nativeElement).find('.password').val()).toEqual("");
  });

  it('should contain one avatar field and it initiates as an empty field', ()=>{
    expect($(fixture.nativeElement).find('.avatar').length).toBe(1);
    expect($(fixture.nativeElement).find('.avatar').val()).toEqual("");
  });

  it('should contain the login link', ()=>{
    expect($(fixture.nativeElement).find('.loginLink').length).toBe(1);
  });

  it('should require all inputs at register account click', ()=>{
    expect($(fixture.nativeElement).find('.firstname').val()).toEqual("");
    expect($(fixture.nativeElement).find('.lastname').val()).toEqual("");
    expect($(fixture.nativeElement).find('.username').val()).toEqual("");
    expect($(fixture.nativeElement).find('.password').val()).toEqual("");
    expect($(fixture.nativeElement).find('.avatar').val()).toEqual("");
    $(fixture.nativeElement).find('.login').trigger('click');
    expect(component.error).toBe("All the fields are required to register an account");
  });

});
