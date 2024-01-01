import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { COURSES } from '../db-data';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses: Course[] = COURSES;
  
  constructor() { }

  ngOnInit(): void {
  }

}
