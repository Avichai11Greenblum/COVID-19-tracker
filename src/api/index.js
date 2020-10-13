import axios from 'axios'; //? --> axios is used to make api request real easy

const url = 'https://covid19.mathdro.id/api';


// Async function for fetching numbers of required info.
export const fetchData = async() => {
    try {
        const {data} = await axios.get(url); //? --> fetching the data from the url
        // console.log(data);

        const modifiedData = { //? --> Making an object for the things we want from the data
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        };

        return modifiedData;

    } catch(e) {
        console.log(e);
    };
};

// Async function for daily info
export const fetchDaily = async() => {
    try{
        const { data } = await axios.get(`${url}/daily`)
        console.log(data);

    } catch(e) {
        console.log(e);
    }
}