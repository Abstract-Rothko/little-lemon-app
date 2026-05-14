import {Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import './App.css';
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/BookingPage" element={<BookingPage/>} />
      <Route path="/bookings" element={<ConfirmedBooking/>} />
    </Routes>
    <Footer />
  </>
  )
}

export default App;
