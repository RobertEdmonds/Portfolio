import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Git from './Git';
import Review from './Review';
import Skills from './Skills';

function App() {
  return (
    <>
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/git' element={<Git/>}/>
        <Route path='/git' element={<Review/>}/>
      </Routes>
      {/* <h1>Robert Edmonds</h1> */}
    </div>
    </>
  );
}

export default App;
