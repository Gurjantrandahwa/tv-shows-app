import React, {useState, useEffect} from 'react';

const BookingForm = () => {
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [savedName, setSavedName] = useState('');
    const [savedDetails, setSavedDetails] = useState('');

    useEffect(() => {
        // Retrieve saved booking details from storage
        const savedName = localStorage.getItem('bookingName');
        const savedDetails = sessionStorage.getItem('bookingDetails');

        // Update state with saved values
        if (savedName) {
            setSavedName(savedName);
        }
        if (savedDetails) {
            setSavedDetails(savedDetails);
        }
    }, []);

    const handleBooking = (e) => {
        e.preventDefault();

        // Save booking details to local or session storage
        localStorage.setItem('bookingName', name);
        sessionStorage.setItem('bookingDetails', details);

        // Clear form inputs
        setName('');
        setDetails('');

        // Display a success message or perform any other action
        alert('Booking successful!');
    };

    return <div>
        <h1>Booking Form</h1>
        {savedName && savedDetails && (
            <div>
                <h3>Saved Booking Details:</h3>
                <p>Name: {savedName}</p>
                <p>Details: {savedDetails}</p>
            </div>
        )}
        <form onSubmit={handleBooking}>
            <div className="form-group">
                <label htmlFor="name">Movie Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="details">Details:</label>
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
