// import {useState} from 'react'

function Cart ({cartProducts, onRemoveFromCart}){
    // const [cartItems, setCartItems] = useState(cartProducts)
    // // console.log(typeof(cartItems[0].unit_price))
    let sum = 0
    for(let product of cartProducts){
        sum += product.unit_price
    }
    
    
    
    return (
        <div>
            {cartProducts.map((cartProduct, index)=>{
                return(
                <div key={index} className="imageCard">
                    <img src={cartProduct.product_thumbnail} alt={cartProduct.product_name}/>
                    <h3>{cartProduct.product_name}</h3>
                    <p>Price: KES{cartProduct.unit_price}</p>
                    <button onClick={()=>onRemoveFromCart(cartProduct)}>Remove from cart</button>

                </div>
                )
            })}
            <h2>Proceed to checkout</h2>
            <p>Total Amount to Pay: {sum}</p>
        </div>
    )
}
export default Cart