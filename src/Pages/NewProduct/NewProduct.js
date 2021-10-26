import React, { useEffect, useState } from 'react';

import NewProducts from './NewProducts/NewProducts';

const NewProduct = () => {
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        fetch('/shop.json')
        .then(res=> res.json())
        .then(data =>setProduct(data))


    },[])
    return (
        <div >
            <h1>{product.length}</h1>

           <div className="container product">
           {
                product.map(pd=> <NewProducts
                pd={pd}
                >

                </NewProducts>)
            }
           </div>
            
        </div>
    );
};

export default NewProduct;