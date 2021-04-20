import React from 'react';

const Orderdetails = (props) => {
//console.log(props.name)
const{productname,image,price,status}=props.name
    return (
        
         
        <tr>
        <td>{productname}</td>
        <td>{price}</td>
        <td>{status}</td>
        </tr>
    );
};

export default Orderdetails;