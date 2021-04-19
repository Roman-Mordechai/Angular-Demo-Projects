import { Component, OnInit } from '@angular/core';
import { Data01Service } from '../../servicies/data-01.service';
import { Data02Service } from '../../servicies/data-02.service';

@Component({
  selector: 'app-my-form-f01',
  templateUrl: './my-form-f01.component.html',
  styleUrls: ['./my-form-f01.component.scss']
})
export class MyFormF01Component implements OnInit {

  constructor(private data01Service: Data01Service) { }

  ngOnInit(): void {

    this.data01Service.GetCourseData().subscribe( data => {
      console.log(data);
    });

  }

}
