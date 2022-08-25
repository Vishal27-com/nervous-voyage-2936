import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import MyBox from './MyBox';
const checkbox=[
    'Time Tracking',
    'Time Analysis',
    'Invoicing',
    'Cost Tracking',
    'Budget Tracking',
    'Other',
]
const SignupForm1 = ({display,secShow}) => {
    return (
        <Box  display={display} >
            <Box p='20px'  h='520px' >
                <Text fontSize='30px' >Start Your Free 30-Day Trial</Text>
                <Text fontSize='20px' mb='30px'>What will you be using Harvest for?</Text>
              {
                checkbox.map(el=>
                    <MyBox title={el} key={el} />)
              }  
                <Button
                color='White'
                fontSize='18px'
                mt='20px'
                position='absolute'
                right='100px'
                p='15px 25px'
                bg='#fa5d00'
                _hover={{ bg:'#fa5d00'}}
                onClick={secShow}
                >Next</Button>
            </Box>
        </Box>
    );
};

export default SignupForm1;