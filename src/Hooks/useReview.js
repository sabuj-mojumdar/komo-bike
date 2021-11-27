import { useState, useEffect } from 'react';

const useReview = () => {
    const [isLoading, setIsloading] = useState(true);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://dry-shelf-32044.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setIsloading(false);
            });
    }, []);
    return (
        { isLoading, reviews }
    );
};

export default useReview;