import BookingForm from "./BookingForm";
import React, { useState, useReducer } from "react";

const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updateTimes = (state, action) => {
    switch (action.type) {
        case "UPDATE_DATE":
            return state;
        default:
            return state;
   }
};

const BookingPage = () => {
    const [formData, setFormData] = useState({
      bookingDate: "",
      time: "",
      guestsTotal: "",
      occasion: ""
    });

    const handleChange = (event) => {
      const {name, value} = event.target;
      setFormData((prev) => (
         {...prev, [name]: value}
      ));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`
        bookingDate: ${formData.bookingDate},
        time: ${formData.time},
        guestsTotal: ${formData.guestsTotal},
        occasion: ${formData.occasion}`);
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (<BookingForm 
        formData={formData} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
        availableTimes={availableTimes}
        dispatch={dispatch}
        />);
}

export default BookingPage;