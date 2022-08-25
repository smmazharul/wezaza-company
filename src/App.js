
import './App.css';
import Navbar from './Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
