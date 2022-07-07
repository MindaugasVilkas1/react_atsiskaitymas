import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Add from './components/Add';

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={
          <Home/>}
        />
        <Route path="/register" element={<Register
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
