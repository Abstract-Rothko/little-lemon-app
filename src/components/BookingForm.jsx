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
      <form onSubmit={handleSubmit} style={{display: 'grid', maxWidth: '200px', gap: '20px'}}>
         <label htmlFor="res-date">Choose date</label>
         <input
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

         <label htmlFor="res-time">Choose time</label>
         <select
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

         <label htmlFor="guests">Number of guests</label>
         <input
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