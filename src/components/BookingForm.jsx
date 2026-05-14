import React from "react";
import "./BookingForm.css"

function BookingForm({availableTimes, dispatch, formData, submitForm}) {
   const handleSubmit = (e) => {
      e.preventDefault();
      submitForm(formData);
   };

   return (
      <form onSubmit={handleSubmit} style={{display: 'grid', maxWidth: '200px', gap: '20px'}}>
         <label htmlFor="res-date">Choose date</label>
         <input
            type="date"
            id="res-date"
            name="date"
            value={formData.date}
            onChange={
               (e) => dispatch({type: 'UPDATE_DATE', payload: Number(e.target.value)})
            }
            required
         />

         <label htmlFor="res-time">Choose time</label>
         <select
            id="res-time"
            name="time"
            value={formData.time}
            onChange={(e) => dispatch({type: 'UPDATE_TIME', payload: e.target.value})}
         >
            {availableTimes.map((time) => (
               <option key={time} value={time}>{time}</option>
            ))}
         </select>

         <label htmlFor="guests">Number of guests</label>
         <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            name="guestsTotal"
            id="guests" value={formData.guests}
            onChange={
               (e) => dispatch({type: 'UPDATE_GUESTS', payload: e.target.value})
            }
            required
         />

         <label htmlFor="occasion">Occasion</label>
         <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={
               (e) => dispatch({type: 'UPDATE_OCCASION', payload: e.target.value})
            }
         >
            <option>Birthday</option>
            <option>Anniversary</option>
         </select>
         <input type="submit" value="Make Your reservation" aria-label="Make Your reservation" />
      </form>
   )
}

export default BookingForm;