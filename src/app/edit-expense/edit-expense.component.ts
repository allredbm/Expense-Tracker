import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../services/expense.services';
import Expense from '../models/expense.models';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.scss']
})
export class EditExpenseComponent implements OnInit {

  constructor(
    private expenseService: ExpenseService,
    private route: ActivatedRoute
  ) { }

  theExpense: Expense = new Expense();


  ngOnInit(): void {

    this.route.params
      .subscribe((params: Params) => {
        if (params['id']) {

          console.log(params["id"])
           this.expenseService.getExpenseByID(params['id']).subscribe(res => {
            this.theExpense = res.data.docs[0];

             }, err => {
              console.error('couldn\'t get record to edit');
          });
        };
      });
  }

  editExpense(expense: Expense) {
    this.expenseService.editExpense(this.theExpense).subscribe(res => {
      console.log('Update Succesful');
      window.location.href = '/';
    }, err => {
      console.error('Update Unsuccesful');
    });
  }

}
