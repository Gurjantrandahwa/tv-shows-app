import React from 'react';
import {Link} from 'react-router-dom';

const ShowList = ({shows}) => {
    return <div>
        {shows.map((show) => (
            <div key={show.show.id} className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{show.show.name}</h5>

                    <p className="card-text">Language: {show.show.language}</p>
                    <Link to={`/show/${show.show.id}`} className="btn btn-primary mr-2">
                        View Summary
                    </Link>
                    <Link to={`/book/${show.show.id}`} className="btn btn-secondary">
                        Book Ticket
                    </Link>
                </div>
            </div>
        ))}
    </div>
};

export default ShowList;
