import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from  '@angular/common/http/testing';
import { UpdateEmployeeComponent } from './update-employee.component';
import { RouterTestingModule } from "@angular/router/testing";
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { of } from 'rxjs';


describe('UpdateEmployeeComponent', () => {
  let component: UpdateEmployeeComponent;
  let fixture: ComponentFixture<UpdateEmployeeComponent>;
  let service : EmployeeService;
  const emp: Employee = {
    id: 1,
    firstName: 'New title',
    lastName: 'Author 1',
    emailId:'@gmail.com'
  };
 
  beforeEach(async () => {

    TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeComponent ],
      imports:[ HttpClientTestingModule, RouterTestingModule],
     providers: [UpdateEmployeeComponent],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();

  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(UpdateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect the user to employees page', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');
    component.goToEmployeeList();
    expect(spy).toHaveBeenCalledWith(['/employees']);
    
    });
     it('Navigation test to employees', () => {
      let router = TestBed.inject(Router);
      const spy = spyOn(router, 'navigate');
      component.goToEmployeeList();
      expect(spy.calls.first().args[0]).toContain('/employees');
    });

});