import { useState, useEffect } from 'react';
import useAuth from './useAuth';

const useBilling = () => {
    const { user } = useAuth();
    const [billings, setBillings] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/billing?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBillings(data))
    }, [user.email]);

    return (
        {
            billings
        }
    );
};

export default useBilling;