import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const [totalproduct,setTotallproduct]=useState({})
  useEffect(()=>{
    fetch(`http://localhost:5000/addTocard`)
    .then(res=>res.json())
    .then(data =>setTotallproduct(data))
},[totalproduct])

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand text-drak " to="/">My Shopping</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <h5>{totalproduct.length}</h5> */}
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/shop">Shop</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More item
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
        
      </ul>
     <div> <h5><i class="fas fa-luggage-cart"></i>{totalproduct.length}</h5> </div>
   

      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;