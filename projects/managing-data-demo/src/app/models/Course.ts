import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

export class Course {
    constructor(
      public Id: number,
      public Code: string,
      public Name: string,
      public Created: Date
    ) {}
  }

  @Injectable({
    providedIn: "root",
  })
  export class CourseAdapter implements Adapter<Course> {
    adapt(item: any): Course {
      return new Course(item.id, item.code, item.name, new Date(item.created));
    }
  }