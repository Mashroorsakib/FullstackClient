import React, { useContext, useEffect, useState } from 'react';
import './Order.css'
import { useParams } from 'react-router';
import { usercontext } from '../../App';
import Orderdetails from '../Orderdetails/Orderdetails';

const Order = () => {

   const [loggeduser, setloggeduser] = useContext(usercontext)
   const [loaddata, setdata] = useState([])
   useEffect(() => {
      fetch(`https://nameless-springs-28046.herokuapp.com/booking/${loggeduser.email}`)
         .then(res => res.json())
         .then(data => {
            setdata(data)
            //console.log(data)
         })
   }, [])
   return (
      <div>
         <p>Hello {loaddata[0]?.name}, You have {loaddata.length} Orders</p>
         <table style={{ width: '100%' }}>
            <tr>
               <th>Service Name</th>
               <th>Service Price</th>
               <th>Order status</th>
            </tr>
            {
               loaddata.map(data => <Orderdetails name={data}></Orderdetails>)
            }
         </table>
      </div>

   );

};

export default Order;