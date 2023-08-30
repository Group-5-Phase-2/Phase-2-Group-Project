function Cart ({cartProducts}){
    
    return (
        <div>
            {cartProducts.map((cartProduct, index)=>{
                return(
                <div key={index} className="imageCard">
                    <img src={cartProduct.product_thumbnail} alt={cartProduct.product_name}/>
                    <h3>{cartProduct.product_name}</h3>
                    <p>Price: KES{cartProduct.unit_price}</p>
                    <button>Remove from cart</button>

                </div>
                )
            })}
        </div>
    )
}
export default Cart