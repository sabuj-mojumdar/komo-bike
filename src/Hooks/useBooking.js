import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from './useAuth';

const useBooking = () => {
    const { user } = useAuth();
    const { email } = user;
    const [shoppings, setShopping] = useState([]);
    const [success, setSuccess] = useState(false);

    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${email}`)
            .then(res => res.json())
            .then(data => setShopping(data))
    }, [email]);

    //delete an order
    const handleDeleteBooking = id => {
        const proceed = window.confirm("Are You sure, you want to delete?");
        if (proceed) {
            const url = `http://localhost:5000/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const restBooking = shoppings.filter(book => book._id !== id);
                        console.log(restBooking);
                        setShopping(restBooking);
                        setSuccess(true);
                    }
                });

        }
    }
    //delete all  order of an email
    const handleDeleteAllBooking = email => {
        const proceed = window.confirm("Are You sure, you want to delete?");
        if (proceed) {
            const url = `http://localhost:5000/bookings/?email=${email}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const restBooking = shoppings.filter(book => book.email !== email);
                        console.log(restBooking);
                        setShopping(restBooking);
                        setSuccess(true);
                        history.push(`/dashboard/complete`);
                    }
                });

        }
    }

    return (
        {
            shoppings, success, handleDeleteBooking, handleDeleteAllBooking
        }
    );
};

export default useBooking;