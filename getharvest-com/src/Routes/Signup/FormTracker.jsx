import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

const FormTracker = ({first,sec,third}) => {
const firstbg=first==='block'?'black':'orange';
const firstcl=first==='block'?'white':'orange';
const secbg=sec==='block'?'black':third==='block'?'orange':'white'
const seccl=sec==='block'?'white':third==='block'?'orange':'black'
const thirdbg=third==='block'?'black':'white';
const thirdcl=third==='block'?'white':'black';

return (
    <Box h='80px' bg='#FBF6EF' borderTopLeftRadius='10px' borderTopRightRadius='10px'>
    <Flex h='80px' justify='center' align='center'>
    <Box borderRadius='50%' w='30px' h='30px'  bg={firstbg} color={firstcl} ><Text mt='4px' fontWeight='bold'>1</Text></Box>
    <Box borderRadius='10px'  w='100px' h='2px' border='1px solid lightgrey' ></Box>
    <Box borderRadius='50%' w='30px' h='30px'  bg={secbg} color={seccl}><Text mt='4px' fontWeight='bold'>2</Text></Box>        
    <Box borderRadius='10px' w='100px' h='2px' border='1px solid lightgrey' ></Box>
    <Box borderRadius='50%'w='30px' h='30px'  bg={thirdbg} color={thirdcl}><Text mt='4px' fontWeight='bold'>3</Text></Box>        
    </Flex>
    </Box>
    );
};

export default FormTracker;