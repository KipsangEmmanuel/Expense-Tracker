import React from 'react'
import "./style/ExpenseForm.css"


const ExpenseForm = () => {
  return (
    <>
    <form id="main-form">
        <form id="form-1">
           <h1 id="add">Add Expense.</h1>
            <input type="text" id="expense"/><br />

        </form>
        <div class="input-group">
            <input type="text" id="amount" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
            <span class="input-group-text">Ksh</span>
            <span class="input-group-text">0.00</span>
        </div>

        <form id="date">
            <label for="Date">Date</label>
            <input type="date" name="date" />
        </form>
        <div class="submit-btn">
            <input type="button" class="btn btn-primary" onclick="alert('Hello World!')" value="Submit" />

        </div>
    </form>
   </>
  )
}

export default ExpenseForm