import React from 'react';

function Searchbar(){
    return (
        <div className="d-flex">
            <div className="form-group">
                <input 
                    className="form-control"
                    type="text"
                    placeholder="Szukaj..." />
            </div>
            <div>
                <button
                    className="btn btn-secondary">szukaj</button> 
            </div> 
        </div>
    );
}

export default Searchbar;