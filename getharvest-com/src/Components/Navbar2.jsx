import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
const links=[
{to:'/time',title:'Time'},
{to:'/expenses',title:'Expenses'},
{to:'/projects',title:'Projects'},
{to:'/team',title:'Team'},
{to:'/reports',title:'Reports'},
{to:'/invoices',title:'Invoices'},
{to:'/estimates',title:'Estimates'},
{to:'/clients',title:'Manage'},
]
const Navbar2 = () => {
    return (
        <Box bg='#FA5D00' h='40px'>
            <Flex direction='row' justify='space-around' >
            <Box>
             <Flex direction='row' justify='space-between' align='center' gap='30px' h='40px'>
            {
                links.map(el=>
                    <NavLink 
                    to={el.to} 
                    key={el.to} 
                    >
                    <Text color='white' fontWeight='bold'>
                    {el.title}
                    </Text>
                    </NavLink>
                    )
                }
                </Flex>   
            </Box>
            <Box>
                <Flex direction='row'  justify='space-between' align='center' gap='30px' h='40px' >
                <NavLink to='/settings'>
                    <Text color='white' fontWeight='bold'>Settings</Text>
                </NavLink>
                <NavLink to='/profile'>
                    <Text color='white' fontWeight='bold'>Profile</Text>
                </NavLink>
                </Flex>
            </Box>
            </Flex>
        </Box>
    );
};

export default Navbar2;