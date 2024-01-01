import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  @Input()
  course!: Course;
  
  @Input()
  cardIndex!: number;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  onTitleChanged(newTitle: string) {

    this.course.description = newTitle;

}


onSaveClicked(description: string) {

    this.courseEmitter.emit({...this.course, description});

}

}
