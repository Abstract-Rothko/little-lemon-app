import BookingForm from "./BookingForm";
import React, { useState } from "react";

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

    return (<BookingForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>);
}

export default BookingPage;