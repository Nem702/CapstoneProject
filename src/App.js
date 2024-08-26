import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from './pages/Home/Home';
import BookingPage from './pages/Booking/BookingPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/menu" element={<Menu />} /> */}
          {/* <Route path="/reservations" element={<Reservations />} /> */}
          <Route path="/bookingpage" element={<BookingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
