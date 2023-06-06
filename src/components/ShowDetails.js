import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        const fetchShowDetails = async () => {
            try {
                const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
                const data = await response.json();
                setShow(data);
            } catch (error) {
                console.error('Error fetching show details:', error);
                setShow(null);
            }
        };

        fetchShowDetails();
    }, [id]);

    return  <div>
        {show ? (
            <div>
                <h1>{show.name}</h1>
                <p>{show.summary}</p>
                <img src={show.image.original}/>
            </div>
        ) : (
            <p>Loading show details...</p>
        )}
    </div>
};

export default ShowDetails;
