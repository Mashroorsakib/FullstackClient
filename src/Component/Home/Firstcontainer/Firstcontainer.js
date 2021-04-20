import React from 'react';
import image from '../../../Component/images/design.png'
const Firstcontainer = () => {
    return (
        <div className="row" style={{backgroundColor: 'rgb(201, 76, 76)'}}>
            <div className="col-md-4 col-sm-12 ms-5">
                        <h1>Contact With us For Your Home Decoration</h1>
                        <br/>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sed.</h3>
                        <br/>
                        <button className="btn btn-primary">See More</button>
            </div>
            <div className="col-md-6 col-sm-12">
                <img style={{height: '400px',width:" 400px", marginLeft:"250px"}} src={image} alt=""/>
            </div>
            
        </div>
    );
};

export default Firstcontainer;