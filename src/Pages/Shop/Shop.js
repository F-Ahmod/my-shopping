import React, { useEffect, useState } from 'react';
import Shops from './../Shops/Shops';

const Shop = () => {
    const [shops,setShops]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/callction')
        .then(res=>res.json())
        .then(data=>setShops(data))

    },[])
    return (
        <div className="singleCard">
           {
                shops.map(shops=><Shops
                    shops={shops}>

                </Shops>)
            }
        </div>
    );
};

export default Shop;