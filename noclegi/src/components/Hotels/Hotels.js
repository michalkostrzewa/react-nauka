import PropTypes from 'prop-types'
import Hotel from './Hotel/Hotel'

const propTypes = {
    hotels : PropTypes.array.isRequired
  }
  

function Hotels(props){
  return (
    <div>
      <p></p>
      {props.hotels.map(hotel => <Hotel  theme={props.theme} key={hotel.id} {...hotel}/>)}
    </div>
  );
} 

Hotels.propTypes = propTypes

export default Hotels;