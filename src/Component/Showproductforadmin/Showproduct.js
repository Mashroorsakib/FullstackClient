import React, { useEffect, useState } from 'react';
import Showproductoadmin from './Showproductoadmin';

const Showproduct = () => {

    const [loaddata, setdata] = useState([]);
    useEffect(() => {
        fetch('https://nameless-springs-28046.herokuapp.com/showalldata')
            .then(res => res.json())
            .then(data => {
                setdata(data)
            })
    }, [])
    return (
        <table style={{ width: '100%' }}>
            <tr>
                <th>Service Name</th>
                <th>Service Price</th>
                <th>Email </th>
                <th>Payment Method</th>
                <th>Order status</th>
            </tr>
            {
                loaddata.map(data => <Showproductoadmin data={data}></Showproductoadmin>)
            }
        </table>
    );
};

export default Showproduct; <h1>this is admin page</h1>