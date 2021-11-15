import { useState, useEffect } from 'react';
import useAuth from './useAuth';

const useBilling = () => {
    const { user } = useAuth();
    const [billings, setBillings] = useState([]);

    useEffect(() => {
        fetch(`https://dry-shelf-32044.herokuapp.com/billing?email=${user.email}`)
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