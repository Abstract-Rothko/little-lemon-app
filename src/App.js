import {Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import './App.css';

function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/BookingPage" element={<BookingPage/>} />
    </Routes>
    <Footer />
  </>
  )
}

export default App;
