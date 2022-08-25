import { Box, Button, Flex, Input, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm3 = ({display}) => {
    return (
        <Box display={display}>
             <Box p='20px' >
             <Text fontSize='30px' >Perfect!</Text>
             <Text fontSize='30px' mb='30px'>Let's set up your account.</Text>
             <SimpleGrid columns='2' gap='15px'>
             <Input 
             placeholder='First name'
             type='text'
             h='50px'
             />
             <Input 
             placeholder='Last name'
             type='text'
             h='50px'
             />
             <Input 
             placeholder='Company name'
             type='text'
             h='50px'
             />
             <Input 
             placeholder='Work email'
             type='email'
             h='50px'
             />
            </SimpleGrid>
             <Input 
             placeholder='Password'
             type='password'
             m='20px 0'
             h='50px'
             />
             <Button
             bg='green'
             w='100%'
             h='60px'
             fontSize='20px'
             color='white'
             borderRadius='20px'
             _hover={{bg:'green'}}
             >Create my account</Button>
             <Flex justify='center' gap='10px'>
             <Text color='grey' m='10px 0' fontSize='18px'>Already a customer?</Text>
             <Text fontSize='18px' m='10px 0'><Link to='/sign_in'>Sign in</Link></Text>
             </Flex>
             <Text fontSize='14px'>
                By creating an account, you agree to the Harvest Terms of service and Privacy policy.
             </Text>
         </Box>
        </Box>
    );
};

export default SignupForm3;