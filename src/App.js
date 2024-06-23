import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* <Route index element={<h1>hi</h1>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
