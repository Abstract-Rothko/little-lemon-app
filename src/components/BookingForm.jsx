import React from "react";

function BookingForm({formData, handleChange, handleSubmit}){


   return (
      <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth:'200px', gap: "20px"}}>
         <label htmlFor="res-date">Choose date</label>
         <input type="date" id="res-date" name="bookingDate" value={formData.bookingDate} onChange={handleChange}/>

         <label htmlFor="res-time">Choose time</label>
         <select id="res-time" value={formData.time} name="time" onChange={handleChange}>
            <option value="">Time</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
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
