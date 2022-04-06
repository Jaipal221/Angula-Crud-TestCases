import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';

describe('EmployeeService', () => {

  let httpMock: HttpTestingController;
  let service : EmployeeService;
  let url = "http://localhost:8080/api/v1/employees";

  const emp: Employee = {
    id: 1,
    firstName: 'New title',
    lastName: 'Author 1',
    emailId:'@gmail.com'
  };
  const mockBook1: Employee = {
    id: 2,
    firstName: 'New title',
    lastName: 'Author 1',
    emailId:'@gmail.com'
  };
  const mockemp: Employee[] = [mockBook1, emp];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EmployeeService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('Employee Service should be created', () => {
    const service: EmployeeService = TestBed.inject(EmployeeService);
    expect(service).toBeTruthy();
  });

  it('should call getEmployeeList and return an array of Employees', () => {
    service.getEmployeesList().subscribe((res) => {
      expect(res).toEqual(mockemp);
    });

    const req = httpMock.expectOne({
      method: 'GET',
      url: `${url}`,
    });

    req.flush(mockemp);
  });

  it('Add Employee and the API should return the Employee that was added', () => {
    service.createEmployee(emp).subscribe((data) => {
      expect(data).toEqual(emp);
    });

    const req = httpMock.expectOne({
      method: 'POST',
      url: `${url}`,
    });

    req.flush(emp);
  });

  it('should call getEmployeebyId', () => {

    const id = 1;
    service.getEmployeeById(id).subscribe((data) => {
      expect(data).toEqual(emp);
    });

    const req = httpMock.expectOne({
      method: 'GET',
      url: `${url}/${id}`,
    });

    req.flush(emp);
  });
    
    it('update Employee and return the updated Employeee from the API', () => {
      service.updateEmployee(1,emp).subscribe((data) => {
      expect(data).toEqual(emp);
      });
      const req = httpMock.expectOne({
      method: 'PUT',
      url: `${url}/1`,
      });
      req.flush(emp);
      });

      it('Delete Employee and return the Employee that was deleted from the API', () => {

      service.deleteEmployee(1).subscribe((data) => {
      expect(data).toEqual(emp);
      });
      const req = httpMock.expectOne({
      method: 'DELETE',
      url: `${url}/1`,
      });
      req.flush(emp);
      });

});

 