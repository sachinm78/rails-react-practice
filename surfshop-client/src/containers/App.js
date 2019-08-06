import React, { Component } from 'react';
import Surfboards from './Surfboards';
import './App.css';

const surfboards = [
    {
        name: "Lightning",
        price: 999,
        img_url: '',
        length: 70    
    },
    {
        name: "Thunder",
        price: 499,
        img_url: '',
        length: 52   
    }
]

class App extends Component {
    render() {
        return (
            <div className="App">
                <Surfboards surfboards={surfboards} />
            </div>
        )
    } 
}

export default App;