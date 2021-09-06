import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/services/user-service/user.service';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let user: UserService;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [AppComponent, UserService],
      imports: [FormsModule, AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
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

  it('should contain one mobile field and it initiates as an empty field', ()=>{
    expect($(fixture.nativeElement).find('.mobile').length).toBe(1);
    expect($(fixture.nativeElement).find('.mobile').val()).toEqual("");
  });

  it('should contain one password field and it initiates as an empty field', ()=>{
    expect($(fixture.nativeElement).find('.password').length).toBe(1);
    expect($(fixture.nativeElement).find('.password').val()).toEqual("");
  });

  it('should contain one email address field and it initiates as an empty field', ()=>{
    expect($(fixture.nativeElement).find('.email').length).toBe(1);
    expect($(fixture.nativeElement).find('.email').val()).toEqual("");
  });

  it('should require all inputs at register account click', ()=>{
    $(fixture.nativeElement).find('.register').trigger('click');
    expect(component.error).toBe("All the fields are required to register an account");
  });
});