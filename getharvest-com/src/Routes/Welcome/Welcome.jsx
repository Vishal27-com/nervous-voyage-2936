import { Box, Select, Text} from '@chakra-ui/react';
import React from 'react';
import { useContext } from 'react';
import { UserInfoContext } from '../../Context/UserInfoContext';
import WelcomeTemplate from './WelcomeTemplate';

const Welcome = () => {
    const {userInfo,userHandler}=useContext(UserInfoContext);
const body=  (<Box><Text m='10px 0'>First, about how many people will be using Harvest?</Text>
<Select m='10px 0' bg='white' fontSize='18px' onChange={userHandler} name='size'>
    <option value="">Select a team size...</option>
    <option value="Just me">Just me</option>
    <option value="2">2</option>
    <option value="3-9">3-9</option>
    <option value="10-24">10-24</option>
    <option value="25-49">25-49</option>
    <option value="50-99">50-99</option>
    <option value="100+">100+</option>
</Select></Box>)
    return (
       <Box>
<WelcomeTemplate 
head1='Welcome to Harvest'
head2='We just have a few quick questions to setup your account...'
body={body}
but_name='Next'
link='/jtbd'

/>
       </Box>
    );
};

export default Welcome;