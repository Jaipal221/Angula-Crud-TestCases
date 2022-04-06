import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';
import { EmployeeListComponent } from './employee-list.component';
import { RouterTestingModule } from "@angular/router/testing";
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Employee } from '../employee';

describe('EmployeeListComponent', () => {

  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let httpMock: HttpTestingController;
  let service : EmployeeService;
  let httpController : HttpClientTestingModule;
  let router : Router;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers:[EmployeeService]
    })
    service = TestBed.inject(EmployeeService);
    httpController = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should Navigate to Employee details', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');
    component.employeeDetails(1);
    expect(spy).toHaveBeenCalledWith(['employee-details',1]);
    
    });

     it('should Navigate to update-employee', () => {
      let router = TestBed.inject(Router);
      let spy = spyOn(router, 'navigate');
      component.updateEmployee(1);
      expect(spy).toHaveBeenCalledWith(['update-employee',1]);
    });

    it("should call getEmployees and return list of employees", async() => {
      const response: Employee[] = [];
      spyOn(service, 'getEmployeesList').and.returnValue(of(response))
      component.getEmployees();
      fixture.detectChanges();
      expect(component.employees).toEqual(response);
    });
  });


