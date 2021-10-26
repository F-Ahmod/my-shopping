import React, { useEffect, useState } from 'react';
import './Callction.css'
import Callctions from './../Callctions/Callctions';

const Callction = () => {
    const [callction,setCallction]=useState([])
    useEffect(()=>{
        fetch('/Callction.json')
        .then(res=>res.json())
        .then(data=>setCallction(data))

    },[])
    return (
        <div>
            <h2>Best Callction</h2>

            <div className="container callction">
            {
                callction.map(callction=><Callctions
                callction={callction}>

                </Callctions>)
            }
            </div>
            
        </div>
    );
};

export default Callction;