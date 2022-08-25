import React, { useState } from "react";
import expenBanner from "../../asset/bg.jpg";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
const ExpenseBanner = () => {
  const [date, setDate] = useState(new Date());
  return (
    // <div class="hero min-h-screen ">
    //   <div class="hero-content flex-col lg:flex-row-reverse">
    //     <img
    //       src={expenBanner}
    //       class="max-w-sm rounded-lg shadow-2xl"
    //       alt="expense-banner"
    //     />
    //     <div>
    //               <DayPicker mode="single" selected={date} onSelect={setDate} />
    //               <p>you have selected: {format(date, 'PP')}</p>
    //     </div>
    //       </div>
          
    //   </div>
    <div class="card lg:card-side bg-base-100 shadow-xl lg:flex-row-reverse">
    <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
    <div class="card-body">
    <DayPicker mode="single" selected={date} onSelect={setDate} />
                 <p>you have selected: {format(date, 'PP')}</p>
    </div>
  </div>
      
  );
};

export default ExpenseBanner;
