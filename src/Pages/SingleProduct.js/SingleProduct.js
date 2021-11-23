import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const SingleProduct = () => {
    const {id}=useParams();
    
    const [singleProduct,setSingleProduct]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/shop/${id}`)
        .then(res=>res.json())
        .then(data =>setSingleProduct(data))
    },[])

     const addToCard = ()=>{
        fetch(`http://localhost:5000/addToCard`,{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(singleProduct)
  
      })
      .then(res => res.json())
      .then(data=>{console.log(data)})

      }

    return (
        <div>
            <h2>jjjjjjjjjjjjjjjj</h2>
           <Card className="singleCard  mx-auto mt-5 mb-5 shadow" style={{ width: '19rem' }}>
               <Card.Img variant="top" src={singleProduct.img} width="300" />
                 <Card.Body>
                 <Card.Title className="text-dark">{singleProduct.name}</Card.Title>
                 
                 <Card.Text className="text-dark">{singleProduct.price}
                 </Card.Text>            
                
               </Card.Body>
               <button onClick={addToCard}>add To Card</button>
             </Card>
           
        </div>
    );
};

export default SingleProduct;