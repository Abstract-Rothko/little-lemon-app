import React, {useState} from "react";
import "./BookingForm.css"
import { clear } from "@testing-library/user-event/dist/clear";

function BookingForm({availableTimes, dispatch, formData, submitForm}) {
   const [errors, setErrors] = useState({});

   const validate = () => {
      const newErrors = {};
      const now = new Date();
      const todayOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());

      const [year, month, day] = formData.date.split('-').map(Number);
      const selectedDate = new Date(year, month - 1, day);

      if (selectedDate < todayOnly) {
         newErrors.date = "Date cannot be in the past.";
      }

      if (selectedDate.getTime() === todayOnly.getTime() && formData.time) {
         const [hours, minutes] = formData.time.split(':').map(Number);
         const selectedMinutes = hours * 60 + (minutes || 0);
         const currentMinutes = now.getHours() * 60 + now.getMinutes();
         if (selectedMinutes <= currentMinutes) {
            newErrors.time = "Selected time had already passed today.";
         }
      }

      const guests = Number(formData.guests);
      if (guests < 1 || guests > 10) {
         newErrors.guests = "Number of guests must be between 1 and 10.";
      }

      return newErrors;
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = validate();
      if (Object.keys(newErrors).length > 0) {
         setErrors(newErrors);
         return;
      }
      setErrors({});
      submitForm(formData);
   };

   const clearError = (field) => {
      setErrors(prev => ({...prev, [field]: undefined}));
   }

   return (
      <main className="form-main">
         <section className="booking-header">
            <h1>Reserve a Table</h1>
         </section>
         <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Date</label>
            <input
               className="form-input"
               type="date"
               id="res-date"
               name="date"
               value={formData.date}
               onChange={(e) => {
                  dispatch({type: 'UPDATE_DATE', payload: e.target.value});
                  clearError('date');
               }}
               required
            />
            {errors.date && <span className="error">{errors.date}</span>}

            <label htmlFor="res-time">Time</label>
            <select
               className="form-input"
               id="res-time"
               name="time"
               value={formData.time}
               disable={availableTimes.length === 0}
               onChange={(e) => {
                  dispatch({type: 'UPDATE_TIME', payload: e.target.value})
                  clearError('time');
               }}>
               {availableTimes.length === 0 ?
                  <option disabled value="">No times available</option> : availableTimes.map((time) => (
                  <option key={time} value={time}>{time}</option>
               ))}
            </select>
            {errors.time && <span className="error">{errors.time}</span>}

            <label htmlFor="guests">Total Guests</label>
            <input
               className="form-input"
               type="number"
               placeholder="1"
               min="1"
               max="10"
               name="guestsTotal"
               id="guests" value={formData.guests}
               onChange={(e) => {
                  dispatch({type: 'UPDATE_GUESTS', payload: e.target.value})
                  clearError('guests');
               }}
               required
            />
            {errors.guests && <span className="error">{errors.guests}</span>}

            <label htmlFor="occasion">Occasion</label>
            <select
               className="form-input"
               id="occasion"
               name="occasion"
               value={formData.occasion}
               onChange={
                  (e) => dispatch({type: 'UPDATE_OCCASION', payload: e.target.value})
               }
            >
               <option value="birthday">Birthday</option>
               <option value="anniversary">Anniversary</option>
            </select>
            <input className="button" type="submit" value="Make Your reservation" aria-label="Make Your reservation" />
         </form>
      </main>
   )
}

export default BookingForm;