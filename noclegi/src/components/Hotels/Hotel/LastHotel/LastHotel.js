function LastHotel(props) {
    return (
        <div className="card bg-light mb-2">
            <div className="card-header">Ostatnio oglądany hotel. Zainteresowany?</div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{props.name}</h5>
                    <p>{props.city}</p>
                </div>

                <a href="#" className="btn btn-sm btn-light">
                    Tak
                </a>
                <button onClick={props.onRemove} className="btn btn-sm btn-light">
                    Nie
                </button>
            </div>
        </div>
    );
}

export default LastHotel;
