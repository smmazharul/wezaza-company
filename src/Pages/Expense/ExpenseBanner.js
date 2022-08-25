import React from "react";
import expenBanner from "../../asset/banner2.jpg";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
const ExpenseBanner = ({date,setDate}) => {

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl lg:flex-row-reverse">
    <figure><img src={expenBanner} className='w-full'  alt="Album"/></figure>
    <div className="card-body">
    <DayPicker mode="single" selected={date} onSelect={setDate} />
                 <p className="text-secondary font-bold">you have selected: {format(date, 'PP')}</p>
    </div>
  </div>
      
  );
};

export default ExpenseBanner;
