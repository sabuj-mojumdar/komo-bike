import { useState } from 'react';

const useCheckOut = () => {
    const [success, setSuccess] = useState(false);
    const [order, setOrder] = useState({});

    const handleUserName = e => {
        const newOrder = e.target.value;
        const updateBooking = { ...order };
        updateBooking.userName = newOrder;
        setOrder(updateBooking);
    }
    const handleEmail = e => {
        const newOrder = e.target.value;
        const updateBooking = { ...order };
        updateBooking.email = newOrder;
        setOrder(updateBooking);
    }
    const handlePhone = e => {
        const newOrder = e.target.value;
        const updateBooking = { ...order };
        updateBooking.phone = newOrder;
        setOrder(updateBooking);
    }
    const handleStreet = e => {
        const newOrder = e.target.value;
        const updateBooking = { ...order };
        updateBooking.street = newOrder;
        setOrder(updateBooking);
    }
    const handleThana = e => {
        const newOrder = e.target.value;
        const updateBooking = { ...order };
        updateBooking.thana = newOrder;
        setOrder(updateBooking);
    }
    const handleTown = e => {
        const newOrder = e.target.value;
        const updateBooking = { ...order };
        updateBooking.thana = newOrder;
        setOrder(updateBooking);
    }
    const handleDistrict = e => {
        const newOrder = e.target.value;
        const updateBooking = { ...order };
        updateBooking.district = newOrder;
        setOrder(updateBooking);
    }
    const handlePostcode = e => {
        const newOrder = e.target.value;
        const updateBooking = { ...order };
        updateBooking.postcode = newOrder;
        setOrder(updateBooking);
    }

    const handleBookingSubmit = e => {

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('One service is added.');
                    setSuccess(true);
                }
            })
        e.preventDefault();

    }
    return (
        { handleUserName, handleEmail, handlePhone, handleStreet, handleThana, handleTown, handleDistrict, handlePostcode, handleBookingSubmit, success }
    );
};

export default useCheckOut;