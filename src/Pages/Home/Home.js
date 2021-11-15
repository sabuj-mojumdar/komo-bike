import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navigation from "../../Components/Navigation/Navigation";
import AllBikes from '../Services/AllBikes';
import RentSection from './RentSection/RentSection';
import Reviews from './Review/Reviews';
import ContactUsSection from './ContactUsSection/ContactUsSection';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <AllBikes />
            <RentSection />
            <Reviews />
            <ContactUsSection />
            <Footer />
        </div>
    );
};

export default Home;