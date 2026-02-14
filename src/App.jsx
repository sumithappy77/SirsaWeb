import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AllProjects from './components/AllProjects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/projects' element={<AllProjects/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
