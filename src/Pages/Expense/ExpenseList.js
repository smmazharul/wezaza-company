import React from "react";

const ExpenseList = ({ expenseCatagory, setExpense }) => {
  const { name, _id, slots } = expenseCatagory;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <h2 class="text-2xl text-secondary text-center">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No Slot Avaiable </span>
          )}
        </p>
        <p>{slots.length}</p>
        <div class="card-actions justify-center">
          <label
            onClick={() => setExpense(expenseCatagory)}
            for="expense-modal"
            class="btn btn-secondary text-white uppercase"
          >
            Submit Expense
          </label>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
