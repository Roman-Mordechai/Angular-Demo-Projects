import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Data02Service {

  constructor() { }

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



  
}
