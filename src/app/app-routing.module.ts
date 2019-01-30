import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from "./index/index.component";
import { CreateExpenseComponent } from "./create-expense/create-expense.component";
import { EditExpenseComponent } from './edit-expense/edit-expense.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'expenses/new', component: CreateExpenseComponent },
  { path: 'expenses/edit/:id', component: EditExpenseComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
