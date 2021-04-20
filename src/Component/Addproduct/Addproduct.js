import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Addproduct = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = data => {
    const eventdata ={
        Productname: data.name,
        imageURL: imageURL,
        Productprice:data.price
       };
   
       const url=`https://nameless-springs-28046.herokuapp.com/addevent`
       fetch(url,{
         method:'POST',
         headers:{
           'Content-type':'application/json'
         },
         body: JSON.stringify(eventdata)
       })
       .then(res=>{console.log("server side response")})
  }

  const handleimageupload = event=>{
    console.log(event.target.files[0])
    const imageData=new FormData();
    imageData.set('key','8b5d23e8b485df82b5db571858eebb72')
    imageData.append('image',event.target.files[0])
    
    axios.post('https://api.imgbb.com/1/upload',
        imageData)
    .then(function (response){
    const imageurl=response.data.data.display_url;
     console.log(imageurl)
     setImageURL(response.data.data.display_url) 
    // console.log(imageURL)
    })
    .catch(function (error){
      console.log(error);
    });
  }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input name="image" ref={register} onChange={handleimageupload} type="file"/>
        <br/>
        <input name="name" ref={register} placeholder="Enter Service  Name"/>
        <br/>
        <input name="price"  ref={register} placeholder="Enter Service Price"/>
        <br/>
        <input type="submit" />
      </form>
    );
};

export default Addproduct;