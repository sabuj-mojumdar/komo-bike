import { useState, useEffect } from 'react';

const useRent = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/rentals')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        { services }
    );
};

export default useRent;