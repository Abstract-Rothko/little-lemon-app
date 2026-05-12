import React from "react";

function BookingForm({formData, handleChange, handleSubmit, availableTimes, dispatch}){

   const handleDateChange = (event) => {
      dispatch({ type: "UPDATE_DATE", payload: event.target.value });
   };

   return (
      <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth:'200px', gap: "20px"}}>
         <label htmlFor="res-date">Choose date</label>
         <input type="date" id="res-date" name="bookingDate" value={formData.bookingDate} onChange={handleDateChange}/>

         <label htmlFor="res-time">Choose time</label>
         <select id="res-time" value={formData.time} name="time" onChange={handleChange}>
            {availableTimes.map((time) => (
               <option key={time} value={time}>{time}</option>
            ))}
         </select>

         <label htmlFor="guests">Number of guests</label>
         <input type="number" placeholder="1" min="1" max="10" name="guestsTotal" id="guests" value={formData.guestsTotal} onChange={handleChange}/>

         <label htmlFor="occasion">Occasion</label>
         <label>
            <input
               id="occasion"
               type="radio"
               name="occasion"
               value="birthday"
               checked = {formData.occasion === "birthday"}
               onChange = {handleChange}
            />Birthday
         </label>

         <label>
            <input
               id="occasion"
               type="radio"
               name="occasion"
               value="anniversary"
               checked = {formData.occasion === "anniversary"}
               onChange = {handleChange}
            />Anniversary
         </label>

         <input type="submit" value="Make Your reservation"/>
      </form>
   );
}

export default BookingForm;
