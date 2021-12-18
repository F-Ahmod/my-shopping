import React, { useEffect, useState } from 'react';
import Shops from './../Shops/Shops';

const Shop = () => {
    const [shops, setShops] = useState([])
    useEffect(() => {
        fetch('https://salty-crag-62284.herokuapp.com/callction')
            .then(res => res.json())
            .then(data => setShops(data))

    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-md-3 d-flex align-items-center container">
                    New Items with 30% discount
                </div>
                <div className="callction mt-5 col-md-9">
                    {
                        shops.map(shops => <Shops
                            shops={shops}>

                        </Shops>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Shop;