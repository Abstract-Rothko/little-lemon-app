import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { submitAPI, generateTimeOptions } from "../utils/dummyAPI";

const getAvailableTimes = (date, bookedTimes = {}) => {
    const dateKey = date.toISOString().split('T')[0];
    const booked = bookedTimes[dateKey] ?? [];
    return generateTimeOptions(date).filter(t => !booked.includes(t));
};

export const bookingReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_DATE": {
            const newDate = new Date(action.payload);
            if(isNaN(newDate.getTime())) return state;
            const newTimes = getAvailableTimes(newDate, state.bookedTimes);
            return {
                ...state,
                date: action.payload,
                times: newTimes,
                time: newTimes[0] ?? "",
            };
        }
        case "UPDATE_GUESTS":
            return { ...state, guests: action.payload };
        case "UPDATE_TIME":
            return { ...state, time: action.payload };
        case "UPDATE_OCCASION":
            return { ...state, occasion: action.payload };
        case "BOOK_TIME": {
            const { date, time } = action.payload;
            const booked = {
                ...state.bookedTimes,
                [date]: [...(state.bookedTimes[date] ?? []), time],
            };
            return {
                ...state,
                bookedTimes: booked,
                times: state.times.filter(t => t !== time),
            };
        }
        default:
            return state;
    }
}

export const initializeTimes = () => {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];
    const times = getAvailableTimes(today);
    return {
        date: dateString,
        times,
        time: times[0] ?? '',
        guests: 1,
        occasion: 'Birthday',
        bookedTimes: {}
    };
};

function BookingPage() {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(bookingReducer, null, initializeTimes);

    const submitForm = async (formData) => {
        const success = await submitAPI(formData);
        if (success) {
            dispatch({ type: "BOOK_TIME", payload: { date: formData.date, time: formData.time } });
            navigate("/bookings");
        }
    };

    return (
        <main>
            <section className="booking-header">
                <h1>Reserve a Table</h1>
            </section>

            <BookingForm
                availableTimes={state.times}
                dispatch={dispatch}
                formData={state}
                submitForm={submitForm}
            />
        </main>
    );
}

export default BookingPage;