import React, { useEffect, useState } from 'react';
import Reviewcontainer from '../Reviewcontainer/Reviewcontainer';
import Showdata from '../Showdata/Showdata';
import Youtube from '../Youtube/Youtube';
import Firstcontainer from './Firstcontainer/Firstcontainer';

import './Home.css'
import SecondContainer from './Secondcontainer/SecondContainer';
const Home = () => {
    const [loaddata, setdata] = useState([]);
    useEffect(() => {
        fetch('https://nameless-springs-28046.herokuapp.com/showdata')
            .then(res => res.json())
            .then(data => {
                setdata(data)
            })
    }, [])

    return (

        <div>
            <Firstcontainer></Firstcontainer>
            <div className="row">
                {
                    loaddata.map(load => <Showdata name={load}></Showdata>)
                }
            </div>
            <h1 className="text-center" style={{color:"blue"}}>Our Recently Completed Project</h1>
            <SecondContainer></SecondContainer>
            <h1 className="text-center" style={{color:"blue"}}>Customer Review</h1>
            <Reviewcontainer></Reviewcontainer>
            <h1 className="text-center" style={{color:"blue"}}>See Our Completed Project in Youtube</h1>
            <br/>
            <Youtube></Youtube>
        </div>
    );
};

export default Home;