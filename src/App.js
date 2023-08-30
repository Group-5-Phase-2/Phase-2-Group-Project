import {Routes, Route }from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Cart from './Components/Cart';
import NotFound from './Components/NotFound';
import { useState } from 'react';


function App() {
  const [cartProducts, setcartProducts] =useState([])

  
  function addToCart(product){
    //.some() ensures that a product is added only once.
    const productExists =cartProducts.some((cartProduct)=>cartProduct.product_name===product.product_name)
                          &&cartProducts.some((cartProduct)=>cartProduct.unit_price===product.unit_price)
    if(productExists){
      alert("Product already added to the cart!")
     }else{
      setcartProducts([...cartProducts, product])
      alert("Product added to the cart successfully!")
    }
  }
  
  return (
    <div className="App">
      <Routes>
          <Route element={<Landing/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home onAddProduct={addToCart}/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/cart' element={<Cart cartProducts={cartProducts}/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
        <Route/>
      </Routes>
   
    </div>
  );
}

export default App;
