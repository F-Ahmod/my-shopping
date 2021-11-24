import React from 'react';
import Banner from '../Banner/Banner';
import ButBanner from '../ButBanner/ButBanner';
import Callction from '../Callction/Callction';
import NewProduct from '../NewProduct/NewProduct';
import Medile from './../Medile/Medile';
import Tshart from './../Tshart/Tshart';

const Home = () => {
    return (
        <div>
            
            
            <Banner></Banner>
            <NewProduct></NewProduct>
            <ButBanner></ButBanner>
            <Callction></Callction>
            <Tshart></Tshart>
            <Medile></Medile>
            
        </div>
    );
};

export default Home;