import { Component } from '@angular/core';

export class Employee_schema{
  Employee_ID:number = 1000;
  FirstName: string;
  LastName: string;
  Contact: string;
  Age: number;
  DateOfBirth: Date;
  Email: string;
  Address: string;
  City: string;
  State: string;
  Zip: string;
  Designation: string;
  Experience:number;
  Shift:number;
  Attendance:number;
  Salary: number;
  Basic:number;
  HRA:number;
  DA:number;
  TDS:number;
  PF:number;
  BankAccount: string;
  TotalLeaves:number;
  CasualLeaves:number;
  SeekLeaves:number;
  PaidLeaves: number;
  Username:string;
  Password:string;

  constructor(){
    this.Employee_ID++;
    this.FirstName = "";
    this.LastName = "";
    this.Contact = "";
    this.Age = 0;
    this.DateOfBirth = new Date();
    this.Email = "";
    this.Address = "";
    this.City = "";
    this.State = "";
    this.Zip = "";
    this.Designation = "";
    this.Experience = 0;
    this.Shift = 0;
    this.Attendance =0;
    this.Salary = 0;
    this.Basic = 0;
    this.HRA = 0;
    this.DA = 0;
    this.TDS = 0;
    this.PF = 0;
    this.BankAccount = "";
    this.TotalLeaves = 0;
    this.CasualLeaves = 0;
    this.SeekLeaves = 0;
    this.PaidLeaves = 0;
    this.Username = "";
    this.Password = "";
  }

}


@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrl: './employee-registration.component.css'
})
export class EmployeeRegistrationComponent {
  Employees = [{}] ;

  Employee:Employee_schema = new Employee_schema();

  flag_next = 1;
  nextpageto2(){
    this.flag_next = 2;
  }
  prevto1(){
    this.flag_next = 1;
  }
  nextpageto3(){
    this.flag_next = 3;
  }
  prevto2(){
    this.flag_next = 2;
  }
  nextpageto4(){
    this.flag_next = 4;
  }
  prevto3(){
    this.flag_next = 3;
  }
  nextpageto5(){
    this.flag_next = 5;
  }
  prevto4(){
    this.flag_next = 4;
  }
  addEmployee(){
    this.Employees.push(this.Employee);
    console.log(this.Employees);
    this.Employee = new Employee_schema();
    this.flag_next = 1;
  }
}
