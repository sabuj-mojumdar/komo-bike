import { useState, useEffect } from 'react';

const useRent = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://dry-shelf-32044.herokuapp.com/rentals')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        { services }
    );
};

export default useRent;