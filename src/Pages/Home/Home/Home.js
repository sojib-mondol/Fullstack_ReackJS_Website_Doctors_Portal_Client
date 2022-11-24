import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import DentalCareSection from '../DentalCareSection/DentalCareSection';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppintment from '../MakeAppointment/MakeAppintment';
import Testmonial from '../Testimonial/Testmonial';

const Home = () => {
    return (
        <div className='mx-5'>
          <Banner></Banner>
          <InfoCards></InfoCards>
          <Services></Services>
          <DentalCareSection></DentalCareSection>
          <MakeAppintment></MakeAppintment>
          <Testmonial></Testmonial>
        </div>
    );
};

export default Home;<h2>This is home.</h2>