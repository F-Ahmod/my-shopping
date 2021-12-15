import React from 'react';
import { useHistory } from 'react-router';

const Shops = ({shops}) => {
    const {img,title,price}=shops
    const history=useHistory()
    const handelShopsProduct=id=>{
        history.push(`/singleShop/${id}`)
    }
    
    return (
        <div>
           <div >
            <div class="card mb-3  rounded-3 w-75" >
  <div class="row g-0 mt-3 ms-2 mb-2">
    <div class="col-md-4">
      <img  src={img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text fw-bold">$ {price}</p>
      </div>
    </div>
  </div>
  <button onClick={()=>handelShopsProduct(shops._id)}>Book Now</button>
</div>

        </div>
        </div>
    );
};

export default Shops;