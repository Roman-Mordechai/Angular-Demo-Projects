import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-form1',
  templateUrl: './my-form1.component.html',
  styleUrls: ['./my-form1.component.scss']
})
export class MyForm1Component implements OnInit {

  myForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.myForm = this.formBuilder.group({
      mySwitch: [true]
    });
  }

  // Test
  submit() {
    console.log(`Value: ${this.myForm.controls.mySwitch.value}`);
  }

}
