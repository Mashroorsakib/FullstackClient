import React, { useEffect, useState } from 'react';
import Showreview from './Showreview';
import "./Showreview.css"

const Reviewcontainer = () => {
    const [loaddata, setdata] = useState([]);
    useEffect(() => {
        fetch('https://nameless-springs-28046.herokuapp.com/showreview')
            .then(res => res.json())
            .then(data => {
                setdata(data)
            })
    }, [])
    return (
        <div className="row">
            {
                loaddata.map(data=> <Showreview data={data}></Showreview>)
            }
        </div>
    );
};

export default Reviewcontainer;