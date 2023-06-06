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
        ? `${show.summary.replace(/<.+?>/g, '')}`
        : "No description";

    return <div >
        {show ? (
            <div className={"detail-container"}>
                <img src={show.image?.original} alt=""/>
                <div className={"text-wrapper"}>
                    <h1 className={"text-danger"}>{show.name}</h1>
                    <p>{summaryText}</p>
                    {
                        show.rating.average &&
                        <p>Rating : <span className={"text-warning fw-semibold"}>{show.rating.average}</span></p>
                    }

                    <div className={"d-flex gap-3"}>
                        {
                            show.genres.map((val,index)=>{
                                return<p key={index} className={"genres bg-info"}>{val}</p>
                            })
                        }
                    </div>
                </div>


            </div>
        ) : (
            <p>Loading show details...</p>
        )}
    </div>
};

export default ShowDetails;
