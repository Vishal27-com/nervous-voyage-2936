import { Box } from '@chakra-ui/react';
import React from 'react';
import MyBox from './MyBox';

const SignupForm1 = () => {
    return (
        <Box>
            <Box>
                <Text fontSize='30px' >Start Your Free 30-Day Trial</Text>
                <Text fontSize='20px'>What will you be using Harvest for?</Text>
                <MyBox />
            </Box>
        </Box>
    );
};

export default SignupForm1;