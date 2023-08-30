import {Routes, Route }from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Cart from './Components/Cart';
import NotFound from './Components/NotFound';


function App() {
  /**
   * Hello team, I may need some help on rendering the specific product whenever it is clicked. I stayed up late in the night but did not figure it out.
   * As per Daisy, in the standup (link: https://github.com/joelnyongesa/react-quotes-app/blob/main/src/components/QuoteDetails.js), we were simply passing down the id using useParams hook. Here, we do not have the product ID so it is a bit hard to fetch using the ID, almost impossible,
   * Please think your way around it, any help will be appreciated.
   */


  // Now we will need to pass this down to the product component to display it.


  return (
    <div className="App">
      <Routes>
          <Route element={<Landing/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home />}/>
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
