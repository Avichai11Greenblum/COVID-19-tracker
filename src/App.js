import React from 'react';
import styles from './App.module.css';

import Cards from './components/Cards/Cards.jsx';
import Cart from './components/Chart/Chart.jsx';
import CountryPicker from './components/CountryPicker/CountryPicker.jsx';

import {fetchData} from './api';

export default class App extends React.Component {
    
    state = {
        data: {},
    };

    async componentDidMount() {  //? --> This block will run at the end of the first render
        const myData = await fetchData();
        
        this.setState( {data : myData} );
    };
    
    render() {
        return(
            <div className={styles.container}>
                <Cards data={this.state.data}/>
                <CountryPicker/>
                <Cart/>
            </div>
        );
    };
};