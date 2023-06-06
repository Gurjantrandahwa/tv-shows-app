import React, {useState, useEffect} from 'react';
import './bookingForm.scss';

const BookingForm = () => {
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [savedName, setSavedName] = useState('');
    const [savedDetails, setSavedDetails] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const savedName = localStorage.getItem('bookingName');
        const savedDetails = sessionStorage.getItem('bookingDetails');

        if (savedName) {
            setSavedName(savedName);
        }
        if (savedDetails) {
            setSavedDetails(savedDetails);
        }
    }, []);

    const handleBooking = (e) => {
        e.preventDefault();
        localStorage.setItem('bookingName', name);
        sessionStorage.setItem('bookingDetails', details);

        setName('');
        setDetails('');
        setSavedName(name);
        setSavedDetails(details);
        setShowAlert(true);

        // Automatically close the alert after 3 seconds
        setTimeout(() => {
            setShowAlert(false);
        }, 4000);
    };

    return <div className="booking-form">
        <h1 className="text-danger">Booking Form</h1>
        {showAlert && (
            <div className="alert alert-success mt-3">
                Booking successful!
            </div>
        )}
        {savedName && savedDetails && (
            <div className="saved-details">
                <h3 className="text-info">Saved Booking Details:</h3>
                <p>Name: {savedName}</p>
                <p>Details: {savedDetails}</p>
            </div>
        )}
        <form onSubmit={handleBooking}>
            <div className="form-group">
                <label htmlFor="name">Movie Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="details">Details</label>
                <textarea
                    className="form-control"
                    id="details"
                    rows="3"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Book Now
            </button>
        </form>
    </div>
};

export default BookingForm;
