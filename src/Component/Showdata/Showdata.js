import React from 'react';
import { Link } from 'react-router-dom';
import './Showdata.css'
const Showdata = (props) => {
    const { Productname, Productprice, imageURL, _id } = props.name
    return (
        <div className="col-md-4 col-sm-12">
        
                <div className="card mt-5 ms-5" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={imageURL} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">{Productname}</h5>
                        <p class="card-text">Price: {Productprice}</p>
                        <Link to={`/show/${_id}`}><button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>
            </div>

    );
};

export default Showdata;