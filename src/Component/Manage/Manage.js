import React from 'react';
import './Manage.css'
const Manage = (props) => {
    const {Productname,_id}=props.name
      const handledelete= data=>{
       fetch(`https://nameless-springs-28046.herokuapp.com/delete/${data}`,{
           method:"DELETE"
       })
       .then(res=>res.json())
       .then(result=>{
           console.log("deleted sucessfull")
       })
      }
    return (
        <div className="product row">
           <div className="col-md-6">
           <p>Product Name: {Productname} </p>
           </div>
           <div className="col-md-6">
           <button onClick={()=>{handledelete(_id)}}>Delete</button>
           </div>
        </div>
    );
};

export default Manage;