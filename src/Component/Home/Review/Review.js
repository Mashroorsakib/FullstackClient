import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
      const eventdata ={
          Clientname: data.name,
          Clientreview : data.Review
         };
     
         const url=`https://nameless-springs-28046.herokuapp.com/addreview`
         fetch(url,{
           method:'POST',
           headers:{
             'Content-type':'application/json'
           },
           body: JSON.stringify(eventdata)
         })
         .then(res=>{console.log("server side response")})
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" ref={register} placeholder="Enter Your Name"/>
        <br/>
        <input name="Review"  ref={register} placeholder="Enter Your Review"/>
        <br/>
        <input type="submit" />
      </form>
    );
};

export default Review;