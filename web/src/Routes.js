// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import ExpenseTypesLayout from 'src/layouts/ExpenseTypesLayout'

import AppLayout from './layouts/AppLayout/AppLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ExpenseTypesLayout}>
        <Route path="/expense-types/new" page={ExpenseTypeNewExpenseTypePage} name="newExpenseType" />
        <Route path="/expense-types/{id:Int}/edit" page={ExpenseTypeEditExpenseTypePage} name="editExpenseType" />
        <Route path="/expense-types/{id:Int}" page={ExpenseTypeExpenseTypePage} name="expenseType" />
        <Route path="/expense-types" page={ExpenseTypeExpenseTypesPage} name="expenseTypes" />
      </Set>
      <Set wrap={AppLayout}>
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
