import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const TshartSingle = () => {
    const {id}=useParams();
    const [stshart,setStshart]=useState({})
    console.log(id);
    useEffect(()=>{
        fetch(`http://localhost:5000/tshart/${id}`)
        .then(res=>res.json())
        .then(data =>setStshart(data))
    },[])
    return (
        <div>
            <h2>Tshart Details</h2>
           <Card className="singleCard  mx-auto mt-5 mb-5 shadow" style={{ width: '19rem' }}>
               <Card.Img variant="top" src={stshart.img} width="300" />
                 <Card.Body>
                 <Card.Title className="text-dark">{stshart.name}</Card.Title>
                 
                 <Card.Text className="text-dark">{stshart.price}
                 </Card.Text>            
                
               </Card.Body>
             
             </Card>
           
        </div>
    );
};

export default TshartSingle;