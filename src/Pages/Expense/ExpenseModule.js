import React from "react";
import { format } from "date-fns";
const ExpenseModule = ({ date, expense ,setExpense}) => {
  const { name,} = expense;
  var today=new Date()
  const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  const handleExpense = (e) => {
    e.preventDefault()
    const slot = e.target.name.value;
    console.log(slot);
    setExpense(null)
  }
  return (
    <div>
      <input type="checkbox" id="expense-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="expense-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">{name}</h3>
          <form onSubmit={handleExpense} className="grid grid-cols-1 gap-4 justify-items-center mt-2">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              disabled
              name="time"
              value={time}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            
            <input
              type="text"
              name="itemName"
              placeholder="Item Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="note"
              placeholder="Special Note"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="unitCost"
              placeholder="Unit Cost"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              placeholder="Type here"
              className="btn btn-secondary w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExpenseModule;
