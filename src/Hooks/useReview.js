import { useState, useEffect } from 'react';

const useReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://dry-shelf-32044.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return (
        { reviews }
    );
};

export default useReview;