import { Box } from '@chakra-ui/react';
import React from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import HomeContent from './HomeContent';

const Home = () => {
    return (
        <Box bgColor='#FBF6EF'>
            <Navbar />
            <HomeContent />
            <Footer />
        </Box>
    );
};

export default Home;