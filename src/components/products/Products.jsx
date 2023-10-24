import React from 'react'
import Product from '../product/Product'

function Products() {

    const products = [
        {id:1,title:'product one',desc:'this is product one'},
        {id:2,title:'product two',desc:'this is product two'},
        {id:3,title:'product three',desc:'this is product three'},
        {id:4,title:'product four',desc:'this is product four'},
        {id:5,title:'product five',desc:'this is product five'},
        {id:6,title:'product six',desc:'this is product six'},
    ];


    return (
        <div>
            <div className='container'>
                <div className='text-center fw-bold product my-1'>
                    products
                </div>
                <div className='row products'>

                    {products.map((product)=>{
                    return  <Product {...product} key={product.id} />
                    })}
                    
                </div>


            </div>
        </div>
    )
}

export default Products
