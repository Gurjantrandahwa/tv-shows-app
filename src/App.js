import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {fetchShows} from './api';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import BookingForm from './components/BookingForm';

function App() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const fetchShowData = async () => {
            const data = await fetchShows();
            console.log(data)
            setShows(data);
        };

        fetchShowData();
    }, []);

    return <Router>
        <div className="container mt-4">
            <h1>TV Shows</h1>
            <Routes>
                <Route exact path="/" element={<ShowList shows={shows}/>}/>
                <Route path="/show/:id" element={<ShowDetails/>}/>
                <Route path="/book/:id" element={<BookingForm/>}/>
            </Routes>
        </div>
    </Router>
}

export default App;
