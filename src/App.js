import {Routes, Route }from 'react-router-dom';
import {useState} from 'react'
import Landing from './Components/Landing';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Cart from './Components/Cart';
import NotFound from './Components/NotFound';
import Product from './Components/Product';
import Receipt from './Components/Receipt';



function App() {
  const [cartProducts, setcartProducts] =useState([])
  
  function addToCart(product){
    //.some() ensures that a product is added only once.
    const productExists =cartProducts.some((cartProduct)=>cartProduct.product_name === product.product_name)
                          && cartProducts.some((cartProduct)=>cartProduct.unit_price === product.unit_price)
    if(productExists){
      alert("Product already added to the cart!")
     }else{
      setcartProducts([...cartProducts, product])
      alert("Product added to the cart successfully!")
    }
  }

  function handleRemoveItemFromCart(product){
    setcartProducts(cartProducts.filter(cartProduct => cartProduct.product_name !== product.product_name) && cartProducts.filter(cartProduct => cartProduct.unit_price !== product.unit_price))
  }



  return (
    <div className="App">
      <Routes>
          <Route element={<Landing/>}>
            <Route path='/' element={<Home onAddProduct={addToCart}/>}/>
            <Route path='/products' element={<Home onAddProduct={addToCart}/>}/>
            <Route path='/home' element={<Home onAddProduct={addToCart}/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/cart' element={<Cart cartProducts={cartProducts} onRemoveFromCart = {handleRemoveItemFromCart}/>}/>
            <Route path='/products/:index' element={<Product/>}/>
            <Route path='/receipt' element={<Receipt products={cartProducts}/>}/>
          </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
