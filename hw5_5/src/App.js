import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pages from './pages/Pages'
import './Style.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Pages />}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;

