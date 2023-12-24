import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Git from './Git';
import Review from './Review';
import Skills from './Skills';
import Work from './Work';

function App() {
  return (
    <>
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/git&learning' element={<Git/>}/>
        <Route path='/work-history' element={<Work/>}/>
        <Route path='/git' element={<Review/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
