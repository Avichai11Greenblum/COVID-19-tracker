import React, { useState, useEffect } from 'react';
import fetchDaily from '../../api/index';


const Chart = () => {

    const [dailyData, setDailyData] = useState({});

    useEffect( () => { //? --> Making an async function for fetching the daily data 
        const fetchAPI = async() => {
            setDailyData(await fetchDaily());
        } 
        fetchAPI(); //? --> Activating the function for fetching the data
    }, []);
    //todo i was about to start using daily data by making a bar variable 48:15
    return(
        <div>
            <h1>Chart</h1>
        </div>
    )
};
export default Chart;