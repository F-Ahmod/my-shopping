import React, { useEffect, useState } from 'react';

import NewProducts from './NewProducts/NewProducts';

const NewProduct = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {

        fetch('https://salty-crag-62284.herokuapp.com/shop')
            .then(res => res.json())
            .then(data => setProduct(data))


    }, [])
    return (
        <div >
            <h1 className="mt-5 mb-5">Our Exclucive callection's</h1>

            <div className="container product">
                {
                    product?.map(pd => <NewProducts
                        pd={pd}
                    >

                    </NewProducts>)
                }
            </div>

        </div>
    );
};

export default NewProduct;