import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-form1',
  templateUrl: './my-form1.component.html',
  styleUrls: ['./my-form1.component.scss']
})
export class MyForm1Component implements OnInit {

  myForm!: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
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
