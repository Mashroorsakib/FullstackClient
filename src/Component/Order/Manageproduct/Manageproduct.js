import React, { useEffect, useState } from 'react';
import Manage  from '../../../Component/Manage/Manage'
const Manageproduct = () => {
    const [loaddata,setdata]=useState([]);
    useEffect(()=>{
        fetch('https://nameless-springs-28046.herokuapp.com/showdata')
        .then(res=>res.json())
        .then(data=>{
            setdata(data)
        })
    },[])
    return (
        <div>
            {
                loaddata.map(data=><Manage name={data}></Manage>)
            }
        </div>
    );
};

export default Manageproduct;