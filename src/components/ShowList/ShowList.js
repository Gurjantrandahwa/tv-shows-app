import React from 'react';
import {Link} from 'react-router-dom';
import "./showList.scss";

const ShowList = ({shows}) => {
    return <div>
        <h1 className={"text-center mb-5 text-danger fw-semibold"}>TV Shows</h1>
        <div className={"card-wrapper"}>
            {shows.map((show) => (
                <div key={show.show.id} className="card shadow-lg">
                    <img src={show.show.image?.original} className="card-img-top card-img" alt="original"/>
                    <div className="card-body">

                        <h5 className="card-title">{show.show.name}</h5>
                        <p className="card-text text-body-secondary">Language: {show.show.language}</p>
                        <div className={"d-flex justify-content-between"}>
                            <Link to={`/show/${show.show.id}`} className="btn btn-primary mr-2">
                                View Summary
                            </Link>
                            <Link to={`/book/${show.show.id}`} className="btn btn-secondary">
                                Book Ticket
                            </Link>
                        </div>

                    </div>
                </div>
            ))}
        </div>

    </div>
};

export default ShowList;
