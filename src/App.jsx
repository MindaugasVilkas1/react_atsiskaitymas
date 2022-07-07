import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Add from './pages/Add';

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={
          <Register/>}
        />
        <Route path="/Home" element={<Home
        />} />
        <Route path="/login" element={<Login
        />} />
         <Route path="/add" element={<Add
        />} />
      </Routes>
    </>
  );
}

export default App;
