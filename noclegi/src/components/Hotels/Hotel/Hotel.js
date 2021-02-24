import React from 'react';
import img from '../../../assets/images/1.jpg'

function Hotel(){
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
                            <p>Tytuł</p>
                            <p>Misto</p>
                        </div>
                        <div className="col-sm-4">
                            <p>Ocena:</p>
                            <p>Opinie:</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-12">
                        <p>opis</p>
                        <a className="btn btn-info" href="#">Wiecej</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hotel;