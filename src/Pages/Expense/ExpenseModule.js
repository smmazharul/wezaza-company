import React from "react";

const ExpenseModule = ({ expense }) => {
    const {name,_id,slots}=expense
  return (
    <div>
      <input type="checkbox" id="expense-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
              <div class="modal-box">
              <label for="expense-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg text-secondary">
            {name}
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label for="expense-modal" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseModule;
