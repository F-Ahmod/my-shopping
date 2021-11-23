import React from 'react';
import  './Medile.css'

const Medile = () => {
    return (
        <div className="mt-3 medilebg">
            <h2>Why Shopping with Us</h2>

<div className="row mt-5">
            <div className="col-md-4">
                <div className="row">
                    <div className="col-md-4 ms-5">
                     <i className="fas fa-truck fs-1" ></i>

                    </div>
                    <div className="col-md-8">
                    <h3 className="ms-0">Free Shipping</h3>
                   <p className="ms-0">For all oder over $99</p>
                    </div>
                
                </div>
               

            </div>
            <div className="col-md-4">
                <div className="row">
                    <div className="col-md-3 ms-5">
                    <i class="fas fa-money-check-alt fs-1"></i>

                    </div>
                    <div className="col-md-9">
                    <h3 className="ms-0">Money Back Guarantee</h3>
                    <p className="ms-0">If good have Problems</p>
                    </div>
                
                </div>
             
               

            </div>
            <div className="col-md-4">
            <div className="row">
                    <div className="col-md-3 ms-5">
                    <i class="fas fa-lock fs-1"></i>

                    </div>
                    <div className="col-md-9">
                    <h3>Payment Secure</h3>
                    <p>100% secure payment</p>
                    </div>
                
                </div>
                
               
                
            </div>
            
        </div>
        </div>
    );
};

export default Medile;