import React from 'react';
import './NewProducts.css';
import { useHistory } from 'react-router';


const NewProducts = ({pd}) => {
    const history=useHistory()
    const {img,name,price}=pd

    const handelSingleProduct=id=>{
        history.push(`/singleProduct/${id}`)
        // console.log(id);
    }
   
    return (
        <div className="singleProduct">
            <div className="card  " >
  <img src={img} className=""  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text fw-bold">Price : $ {price}</p>
   <button className="btnLink">
       <button onClick={()=>handelSingleProduct(pd._id)}>Book Now</button>
   
   </button>
  </div>
</div>
        </div>
    );
};

export default NewProducts;