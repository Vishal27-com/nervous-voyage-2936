import { Box, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { company } from '../Routes/Home/homeData';

const CompanyUses = () => {
    return (
     
            <Box>
            <Flex align='center' h='20px'>
                <Text fontSize='20px' color='#FA5D00'>70,000+</Text>
                <Text fontSize='20px' color='grey'>
                     companies track time with Harvest
                </Text>
                <Box bgColor='#FA5D00' h='0.5px' w='60%'></Box>

                </Flex>
                <Flex h='150px' align='center' justify='space-around'>
                    {
                        company.map(el=> 
                        <Box><Img opacity='0.2' src={el.logo} /></Box>
                    )}
                </Flex>
          </Box>
        
    );
};

export default CompanyUses;