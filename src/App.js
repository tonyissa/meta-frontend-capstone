import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import ReservationPage from './pages/ReservationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<h1>About us</h1>} />
          <Route path='/reservations' element={<ReservationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
