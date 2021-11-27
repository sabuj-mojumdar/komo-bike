import { useState, useEffect } from 'react';

const useRent = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        fetch('https://dry-shelf-32044.herokuapp.com/rentals')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setIsloading(false);
            });
    }, []);

    return (
        { isLoading, services }
    );
};

export default useRent;