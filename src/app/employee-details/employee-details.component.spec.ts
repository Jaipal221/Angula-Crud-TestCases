import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeService } from '../employee.service';
import { EmployeeDetailsComponent } from './employee-details.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Employee } from '../employee';
import { of } from 'rxjs';

describe('EmployeeDetailsComponent', () => {


  let httpMock: HttpTestingController;
  let service : EmployeeService;
  let httpController : HttpClientTestingModule;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsComponent ],
      imports:[ HttpClientTestingModule,RouterTestingModule ],
      providers:[EmployeeService]
      })
    service = TestBed.inject(EmployeeService);
    httpController = TestBed.inject(HttpTestingController);
  
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(EmployeeDetailsComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
   
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EmployeeDetailsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
 
});
