import PropTypes from 'prop-types'
import React from 'react';
import img from '../../../assets/images/1.jpg'

const propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
}

function Hotel(props){
  return (
    <div className="card hotel">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-4">
          <img
            src={img}
            alt=""
            className="img-fluid" />
          </div>
          <div className="col-sm-8">  
          <div className="row">
            <div className="col-sm-8">
              <p>{props.name}</p>
              <p>{props.city}</p>
            </div>
            <div className="col-sm-4">
              <p>Ocena: {props.rating}</p>
            </div>
          </div>
          </div>
          <div className="col-12">
            <p></p>
            <p>{props.description}</p>
            <a className="btn btn-info" href="#">Wiecej</a>
          </div>
        </div>
      </div>
    </div>
  );
}

Hotel.propTypes = propTypes

export default Hotel;