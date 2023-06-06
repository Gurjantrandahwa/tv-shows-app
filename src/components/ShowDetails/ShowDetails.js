import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import "./showDetails.scss"
const ShowDetails = () => {
    const {id} = useParams();
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

    const summaryText = show?.summary
        ? `${show.summary.replace(/<.+?>/g, '').split(' ').slice(0, 10).join(' ')}...`
        : "No description";

    return <div className={"detail-wrapper"}>
        {show ? (
            <div className={"d-flex"}>
                <img src={show.image?.original} alt=""/>
                <div>
                    <h1>{show.name}</h1>
                    <p>{summaryText}</p>
                </div>


            </div>
        ) : (
            <p>Loading show details...</p>
        )}
    </div>
};

export default ShowDetails;
