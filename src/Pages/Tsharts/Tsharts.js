import React from 'react';
import { useHistory } from 'react-router';

const Tsharts = ({tshart}) => {
    const {img,price,name}=tshart
     const history=useHistory()
    const handelSingleTshart=id=>{
        history.push(`/singleTshart/${id}`)
       
    }
    return (
        <div >
        <div class="card mb-3  rounded-3 w-75" >
<div class="row g-0 mt-3 ms-2 mb-2">
<div class="col-md-4">
  <img style={{width:"150px",height:"150px"}}  src={img} class="img-fluid rounded-start" alt="..."/>
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text fw-bold">$ {price}</p>
  </div>
  <button onClick={()=>handelSingleTshart(tshart._id)}>Book Now</button>
   
   
</div>
</div>
</div>
    </div>
    );
};

export default Tsharts;