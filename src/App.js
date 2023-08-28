import logo from './logo.svg';
//import './App.css';
import Navbar from './Components/Navbar';
import {Routes, Route }from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Cart from './Components/Cart';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route element={<Landing/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
        <Route/>
      </Routes>
   
    </div>
  );
}

export default App;
