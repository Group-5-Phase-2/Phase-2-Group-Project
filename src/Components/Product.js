import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Product(){
    const {index} = useParams()
    console.log(index)

    const [product, setproduct] = useState([])
    
    useEffect(()=>{
        fetch(`http://ecommerce.muersolutions.com/api/v1/products`)
        .then(r=>r.json())
        .then(data => setproduct(data[index]))
        .catch(e=>console.log(e))
    }, [index])

    return(
        <div className="productItem">
            <img src={product.product_full_image} alt={product.name}/>
            <h3>{product.product_name}</h3>
            <span>Price: KES{product.unit_price}</span>
            <p>Ranking: {product.ranking}</p>
            <p>Description: {product.product_description}</p>
            <p>Created at: {product.created}</p>
            <button><Link to='/products'>Back to Products</Link></button>
        </div>
    )
}

export default Product;