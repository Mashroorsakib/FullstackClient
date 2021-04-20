import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

import { usercontext } from '../../App';

const Header = () => {
    const [loggeduser,setloggeduser]=useContext(usercontext)
    const [isadmin,setadmin]=useState(false)

    useEffect(() => {
        fetch('https://nameless-springs-28046.herokuapp.com/isadmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggeduser.email })
        })
            .then(res => res.json())
            .then(data => {
                setadmin(data)
                console.log(data)
            });
    }, [loggeduser.email])
    return (
        <div className="top-container row">
           <div className="first-Container col-md-3">
           <h1>InteriorDesign.COM</h1>
           </div>
           <div className="Menu col-md-9">
           <nav className="nav">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>

                  {
                      !isadmin &&
                      <li>
                      <Link to="/review">Add a Review</Link>
                  </li>
                  }

                    <li>
                        <Link to="/order">Order</Link>
                    </li>
                    {isadmin&&
                       <div>
                            <li>
                        <Link to="/manageproduct">Manageproduct</Link>
                    </li>
                  
                     
                    <li>
                      <Link to="/makeadmin">Make Admin</Link>
                    </li>
                  
                    <li>
                        <Link to="/addproduct">ADD Service</Link>
                    </li>
                    <li>
                        <Link to="/showproduct">All Order</Link>
                    </li>
                       </div>
                    }
                    <li>
                     <Link to="/login">Login</Link> 
                    </li>
                </ul>
            </nav>
           </div>
          
        </div>
    );
};

export default Header;