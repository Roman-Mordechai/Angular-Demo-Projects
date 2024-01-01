import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { merge, Observable, OperatorFunction, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, mergeAll, switchMap, tap } from 'rxjs/operators';
import { Data01Service } from '../../servicies/data-01.service';

type Item = {code: number, description: string};

@Component({
  selector: 'app-my-form-autocomplete',
  templateUrl: './my-form-autocomplete.component.html',
  styleUrls: ['./my-form-autocomplete.component.scss']
})
export class MyFormAutocompleteComponent implements OnInit {

  public empRoleModel: any;
  empRole: Item[]=[];
  formatter = (item: Item) => item.description;
  employees: FormGroup = Object.create(null);
  focus$ = new Subject<any>();
  
  constructor(
    private data01Service: Data01Service,
    private fb: FormBuilder) { }

  ngOnInit(): void {

    this.employees = this.fb.group({
      empRole: ['', Validators.required]
    });
  
    this.data01Service.GetEmployeeRoleData().subscribe( data => 
      {
        this.empRole = data.EmployeeRoleTypes;
        console.log(this.empRole);
      });
  }

  searchItem: OperatorFunction<string, readonly Item[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term.length < 2 ? [] : 
        //this.empRole.filter(v => v.description.indexOf(term.toLowerCase()) > -1).slice(0, 10))
          this.empRole.filter(state => new RegExp(term, 'mi').test(state.description)).slice(0, 10)  )
    )

    onSubmit() : void  {
      console.log("submit", this.employees.value);
    }
}
