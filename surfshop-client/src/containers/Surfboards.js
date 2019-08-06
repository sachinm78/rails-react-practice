import React, { Component } from 'react'

import SurfboardCard from '../components/SurfboardCard'
import SurfboardForm from './SurfboardForm'
import './Surfboards.css' 

class Surfboards extends Component {

    render() {
        return (
            <div className="SurfboardsContainer">
                <h1>Surfboards</h1>
                {this.props.surfboards.map(surfboard => <SurfboardCard key={surfboard.id} surfboard={surfboard} />)}
                <SurfboardForm />
            </div>
        ) 
    }
}

export default Surfboards;
