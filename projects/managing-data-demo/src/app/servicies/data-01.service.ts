import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Course, CourseAdapter } from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class Data01Service {

  constructor(
    private http: HttpClient,
    private courseAdapter: CourseAdapter
    ) { }

  GetEmployeeRoleData(): Observable<any> {
 
    const types =  {
      "EmployeeRoleTypes" : [
        { Code: 1, Description: "מנהל" },
        { Code: 2, Description: "צוות חינוך טיפול" },
        { Code: 3, Description: "מבשל" },
        { Code: 4, Description: "נותן שירות" },
        { Code: 5, Description: "מתגורר במעון" }
        ]
      };
  
      return of(types).pipe(delay(3000));
  }

  GetCourseData(): Observable<Course[]> {
    const url = '/assets/data/courses.json';
    
    return this.http
      .get(url)
      .pipe(
        //map((data:any) => data.map((item:any) => new Course(item.id, item.code, item.name, new Date(item.created))))
        map((data: any) => data.map((item:any) => this.courseAdapter.adapt(item)))
      );
  }



}
