import { v4 as uuidv4 } from 'uuid';

function Receipt({products}){
    let sum=0
    for(let product of products){
        sum += product.unit_price
    }

    return(
        <div>
            <h1>Thank you for shopping with us</h1>
            <p>Transaction Ref: {uuidv4()}</p>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index)=>{
                        return(
                            <tr key={index}>
                                <td>{product.product_name}</td>
                                <td>{product.unit_price}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td>Sum</td>
                        <td>{sum}</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}



export default Receipt;