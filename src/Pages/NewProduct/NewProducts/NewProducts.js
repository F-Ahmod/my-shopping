import React from 'react';
import './NewProducts.css'
import { Link } from 'react-router-dom';

const NewProducts = (props) => {
    const {img,name,price}=props.pd
    return (
        <div >
            <div className="card  " >
  <img src={img} class=""  alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{price}</p>
    <Link to="/" class="btn btn-primary">Go somewhere</Link>
  </div>
</div>
        </div>
    );
};

export default NewProducts;