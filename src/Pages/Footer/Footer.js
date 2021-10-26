import React from 'react';
import './Footer.css'
import img from '../images/xicon-pay-01.png.pagespeed.ic.x3ksseq-Ro.webp'
import img1 from '../images/xicon-pay-02.png.pagespeed.ic.VV76jih-LZ.webp'
import img2 from '../images/xicon-pay-03.png.pagespeed.ic.qm10pI94h8.webp'
import img3 from '../images/xicon-pay-04.png.pagespeed.ic.afX_pRP1xW.webp'

const Footer = () => {
    return (
        <div>
            <div className="row back mt-3">
            <div className="col-md-4">
                <h3 className="ms-2 mt-2">My Shopping</h3>
                <p className="ms-2">I love grocery shopping. It's one of my favorite things. I don't want to become an ordering-food-online person. </p>

            </div>
            <div className="col-md-4">
                <h3 className="ms-2 mt-2">Contact</h3>
                <p className="ms-2">ahmod@gmailcom</p>
                <p className="ms-2">0174444444444</p>
                <p className="ms-2">sylhet,Bangladesh</p>

            </div>
            <div className="col-md-4 ">
                <h3 className="ms-2 mt-2">Follow Us</h3>
                <p className="ms-2">facbook</p>
                <p className="ms-2">youtube</p>
                <p className="ms-2">tweteer</p>

            </div>
            
        </div >
      <div className="downbg">
      <img className="me-2" src={img} alt="" srcset="" />
      <img className="me-2" src={img1} alt="" srcset="" />
      <img className="me-2" src={img2} alt="" srcset="" />
      <img className="" src={img3} alt="" srcset="" />
      </div>
        </div>
    );
};

export default Footer;