import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navigation from "../../Components/Navigation/Navigation";
import AllBikes from '../Services/AllBikes';
import RentSection from './RentSection/RentSection';
import Reviews from './Review/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation />
            <AllBikes />
            <Reviews />
            <RentSection />
            <Footer />
        </div>
    );
};

export default Home;