import React, { Component } from 'react';
import Surfboards from './Surfboards';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            surfboards: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/surfboards')
            .then(resp => resp.json())
            .then(surfboards => this.setState({ surfboards }))
    }

    render() {
        return (
            <div className="App">
                <Surfboards surfboards={this.state.surfboards} />
            </div>
        )
    } 
}

export default App;