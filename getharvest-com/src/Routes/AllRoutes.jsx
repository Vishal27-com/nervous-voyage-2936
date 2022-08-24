import { Box } from '@chakra-ui/react';
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './Home/Home';
import WhyHarvest from './WhyHarvest';
import Features from './Features';
import Customers from './Customers';
import Integration from './Integration';
import Pricelist from './Pricelist';

const AllRoutes = () => {
    return (
        <Box>
           <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/why-harvest' element={<WhyHarvest />} />
            <Route path='/features' element={<Features />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/intergrations' element={<Integration />} />
            <Route path='/pricing' element={<Pricelist />} />
            </Routes> 
        </Box>
    );
};

export default AllRoutes;