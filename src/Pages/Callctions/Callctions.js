import React from 'react';

const Callctions = (props) => {
    const {img,title,price}=props.callction
    return (
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
</div>
        </div>
    );
};

export default Callctions;