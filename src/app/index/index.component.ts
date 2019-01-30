import { Response } from '@angular/http';
import { ExpenseService } from '../services/expense.services';
import Expense from '../models/expense.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private expenseService: ExpenseService
  ) { }

  expensesList: Expense[];  

  ngOnInit(): void {

    this.expenseService.getExpenses()
      .subscribe(expenses => {
        this.expensesList = expenses;
      });
  }

    deleteExpense(expense: Expense) {
      this.expenseService.deleteExpense(expense._id).subscribe(res => {
        this.expensesList.splice(this.expensesList.indexOf(expense), 1);
      });
    }
}
