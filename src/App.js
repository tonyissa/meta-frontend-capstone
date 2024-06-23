import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<main>hi</main>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
