import { Component, OnInit } from '@angular/core';
import { Data01Service } from '../../servicies/data-01.service';

@Component({
  selector: 'app-my-form-f02',
  templateUrl: './my-form-f02.component.html',
  styleUrls: ['./my-form-f02.component.scss']
})
export class MyFormF02Component implements OnInit {

  constructor(private data01Service: Data01Service) { }

  ngOnInit(): void {
    
    //this.getValueWithAsync();
    
    this.getEmployeeRoleData2();
    
  }

  resolveAfter2Seconds(x: unknown) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }

  async getValueWithAsync() {
    const value = <number>await this.resolveAfter2Seconds(20);
    console.log(`async result: ${value}`);
  }

  getEmployeeRoleData1() {
    this.data01Service.GetEmployeeRoleData().subscribe( data => console.log(data));
    console.log("I'm not waiting");
  }

  async getEmployeeRoleData2() {
    const data = await this.data01Service.GetEmployeeRoleData().toPromise();
    console.log(data);
    console.log("I'm waiting");
  }


}
