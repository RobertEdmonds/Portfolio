import './CSS/App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Git from './Git';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/git' element={<Git/>}/>
      </Routes>
      <h1>Robert Edmonds</h1>
    </div>
    </>
  );
}

export default App;
