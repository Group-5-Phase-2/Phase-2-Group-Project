import { useEffect, useState } from "react"


function Home (){
    // Setting the products variable before fetching the data from the JSON server
    const [products, setProducts] = useState([])

    // Fetching the data from the JSON server.
    useEffect(()=>{
        fetch('http://ecommerce.muersolutions.com/api/v1/products')
        .then(r=>r.json())
        .then(data => setProducts(data))
        .catch(e=>console.log(e))
    }, [])


    // The products are now returned, 15 in number. Lets loop over them to create a card of each product
    const productsList = products.map((product, index)=>{
        return(
            <div key={index} className="imageCard">
                <img src={product.product_thumbnail} alt={product.name}/>
                <h3>{product.product_name}</h3>
                <p>Price: KES{product.unit_price}</p>
            </div>
        )
    })


    return (
        <div>
            <h1>Our Products</h1>
            <div className="productsList">
                {productsList}
            </div>
        </div>
)}
export default Home