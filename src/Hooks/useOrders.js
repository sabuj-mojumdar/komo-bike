import { useState, useEffect } from 'react';
import useAuth from './useAuth';

const useOrders = () => {
    const { user } = useAuth();
    const { email } = user;

    const [allOrders, setAllOrders] = useState([]);
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/orders/?email=${email}`)
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [email]);


    //delete all  order of an email
    const handleDeletebook = id => {
        const proceed = window.confirm("Are You sure, you want to delete?");
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const restBooking = allOrders.filter(book => book.id !== id);
                        console.log(restBooking);
                        setAllOrders(restBooking);
                        setSuccess(true);
                    }
                });

        }
    }

    return (
        {
            allOrders, success, handleDeletebook

        }
    );
};

export default useOrders;