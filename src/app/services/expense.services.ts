import Expense from '../models/expense.models';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';


import { map } from 'rxjs/operators';

@Injectable()
export class ExpenseService {

  api_url = 'http://localhost:3000';
  expenseUrl = `${this.api_url}/api/expenses`;

  constructor(
    private http: HttpClient) { }

    

createExpense(expense: Expense): Observable<any>{
    return this.http.post(`${this.expenseUrl}`, expense);
}
 

getExpenses(): Observable<Expense[]>{
    return this.http.get(this.expenseUrl)
    .pipe(map(res  => {
      //Maps the response object sent from the server
        
      return res["data"].docs as Expense[];
    }))
  }
    getExpenseByID(id:string):any{
      let getUrl = `${this.expenseUrl}/?_id=${id}`
      return this.http.get(getUrl)
    

    }


editExpense(expense: Expense){
    let editUrl = `${this.expenseUrl}/${expense._id}`
    //returns the observable of http put request 
    return this.http.put(editUrl, expense);
  }


deleteExpense(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.expenseUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    // for demo purposes only
    return Promise.reject(error.message || error);
  }


}