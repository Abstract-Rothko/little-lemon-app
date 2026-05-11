import React, { useState } from "react";

function BookingForm(){
   const [formData, setFormData] = useState({
      bookingDate: '',
      time: "17:00",
      guestsTotal: 2,
      occasion: 'Birthday'
   });

   const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value
      }));
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Form submitted:", formData);
   }

   return (
      <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth:'200px', gap: "20px"}}>
         <label htmlFor="res-date">Choose date</label>
         <input type="date" id="res-date" value={formData.bookingDate} onChange={handleChange}/>

         <label for="res-time">Choose time</label>
         <select id="res-time" value={formData.time} onChange={handleChange}>
            <option value="">Time</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
         </select>

         <label for="guests">Number of guests</label>
         <input type="number" placeholder="1" min="1" max="10" id="guests" value={formData.guestsTotal} onChange={handleChange}/>

         <label for="occasion">Occasion</label>
         <select id="occasion" value={formData.occasion} onChange={handleChange}>
            <option>Birthday</option>
            <option>Anniversary</option>
         </select>
         <input type="submit" value="Make Your reservation"/>
      </form>
   );
}

export default BookingForm;
