import React, { Component }  from 'react';
import Hotel from './Hotel/Hotel'

class Hotels extends React.Component{
    render() {
        return (
            <div>
                <h2>Oferty:</h2>
                <Hotel/>
                <Hotel/>
                <Hotel/>
            </div>
        );
    }
} 

export default Hotels;