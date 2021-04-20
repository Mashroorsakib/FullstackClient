import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { usercontext } from '../../App';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const Productdetails = () => {
    const { id } = useParams()
    const [loggeduser, setloggeduser] = useContext(usercontext)
    const [loaddata, setdata] = useState([])
    useEffect(() => {
        fetch(`https://nameless-springs-28046.herokuapp.com/singleproduct/${id}`)
            .then(res => res.json())
            .then(data => {
                setdata(data)
                console.log(data)
            })
    }, [id])
    const [payment,setpayment]=useState('false')

    const handleorder = () => {
        const productname = loaddata.Productname;
        const image = loaddata.imageURL;
        const price = loaddata.Productprice;
        const status="pending"
        const paymentprocess="Credit Card"
        const bookingdetails = { ...loggeduser, productname, image, price,status,paymentprocess}
        fetch('https://nameless-springs-28046.herokuapp.com/bookingdetails', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingdetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("ordersucessfull")
                }
            })
    }

    const stripePromise = loadStripe('pk_test_51IeZOsL3044v7TPpAe7ed1K3L98Y9olmVNgpePE9aV3gf8m7jYYnEd4BjCx1UMQUHK9pmDrOe1joH4oUVWyYPCAd00bvqpCMjy')
    return (
        <div>

            <div>
                <p>Service Name:{loaddata?.Productname} </p>
                <p>Service Price: {loaddata?.Productprice}</p>
                <img src={loaddata?.imageURL} alt="" />
            </div>
            <br />
             
            <input type="checkbox" onChange={()=>{setpayment(!payment)}}name="Card" id=""/>
            <label htmlFor="Card">Makepayment</label>   
           {
              !payment&&
                  <Elements stripe={stripePromise}>

                  <CardElement
                      options={{
                          style: {
                              base: {
                                  fontSize: '16px',
                                  color: '#424770',
                                  '::placeholder': {
                                      color: '#aab7c4',
                                  },
                              },
                              invalid: {
                                  color: '#9e2146',
                              },
                          },
                      }}
                  />
              </Elements>
           }
           <br/>
           {
               !payment&&
            <button onClick={() => { handleorder() }}>Place Order</button>
           }
        </div>
    );
};

export default Productdetails;