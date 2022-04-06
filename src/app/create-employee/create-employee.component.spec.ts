import {  Router } from '@angular/router';
import { ComponentFixture, TestBed} from '@angular/core/testing';
import { HttpClientTestingModule } from  '@angular/common/http/testing';
import { CreateEmployeeComponent } from './create-employee.component';
import { RouterTestingModule } from "@angular/router/testing";
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {Location} from '@angular/common';

describe('CreateEmployeeComponent', () => {

  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;


  let router : Router;
  let location : Location;
  beforeEach(async () => {

     TestBed.configureTestingModule({
      declarations: [ CreateEmployeeComponent ],
      imports:[ HttpClientTestingModule, RouterTestingModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
   
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  
    const fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

   it('should create', () => {
    const fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
  it('should redirect the user to the users page after saving', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');
    component.goToEmployeeList();
    expect(spy).toHaveBeenCalledWith(['/employees']);
  });
});


