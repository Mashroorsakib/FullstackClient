import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { usercontext } from '../../App';

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
           const Adminemail={
               Email:data.email
           }
         console.log(data.email)
         fetch('https://nameless-springs-28046.herokuapp.com/addadmin',{
            method:'POST',
            headers:{
              'Content-type':'application/json'
            },
            body: JSON.stringify(Adminemail)
          })
          .then(res=>{console.log("server side response")})
  };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input name="email" ref={register} placeholder="Enter Your Email"/>
        <br/>
        <input type="submit" />
      </form>
  
    );
};

export default Admin;<h1>admin</h1>