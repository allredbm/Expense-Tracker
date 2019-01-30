import { Response } from '@angular/http';
import { ExpenseService } from '../services/expense.services';
import Expense from '../models/expense.models';
import { Component, OnInit } from '@angular/core';
// import { faCoffee } from 'font-awesome';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.scss']
})
export class CreateExpenseComponent implements OnInit {

constructor(
  private expenseService: ExpenseService
) { }

public newExpense: Expense = new Expense();

expensesList: Expense[];
editExpenses: Expense[] = [];


ngOnInit(): void {
  // At component initialization the
  this.expenseService.getExpenses()
  .subscribe(expenses => {
    this.expensesList = expenses;
    console.log(expenses);
  });
}

create() {
  this.expenseService.createExpense(this.newExpense)
    .subscribe((res) => {
      this.expensesList.push(res.data);
      this.newExpense = new Expense();
    });
    window.location.href = '/';
}

editExpense(expense: Expense) {
   if (this.expensesList.includes(expense)) {
    if (!this.editExpenses.includes(expense)) {
      this.editExpenses.push(expense);
    } else {
      this.editExpenses.splice(this.editExpenses.indexOf(expense), 1);
      this.expenseService.editExpense(expense).subscribe(res => {
        console.log('Update Succesful');
       }, err => {
          console.error('Update Unsuccesful');
        });
      }
    }
  }

  submitExpense(event, expense: Expense) {
    if (event.keyCode === 13) {
      this.editExpense(expense);
    }
  }

  deleteExpense(expense: Expense) {
    this.expenseService.deleteExpense(expense._id).subscribe(res => {
      this.expensesList.splice(this.expensesList.indexOf(expense), 1);
    });
  }

}
