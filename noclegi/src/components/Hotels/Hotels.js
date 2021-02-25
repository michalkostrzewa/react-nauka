import React  from 'react';
import PropTypes from 'prop-types'
import Hotel from './Hotel/Hotel'

const propTypes = {
    hotels : PropTypes.array.isRequired
  }
  

function Hotels(props){
    return (
        <div>
        <h2>Oferty:</h2>
        {props.hotels.map(hotel => <Hotel key={hotel.id} {...hotel}/>)}
        </div>
    );
} 

Hotels.propTypes = propTypes

export default Hotels;