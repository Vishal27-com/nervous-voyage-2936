import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';

const MyButton = ({children,size,wei}) => {
    return (
        <Box>
            <Button
            //  colorScheme='orange'
             bgColor='#FA5D00'
             color='white'
             borderRadius='15px'
             p='15px 25px' >
               <Text fontFamily='sans-serif' fontSize={size} fontWeight={wei} >{children}</Text> 
                </Button>
        </Box>
    );
};

export default MyButton;