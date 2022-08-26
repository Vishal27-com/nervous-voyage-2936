import { Box,  Radio, RadioGroup, Stack } from '@chakra-ui/react';
import React from 'react';
import { useContext } from 'react';
import { UserInfoContext } from '../../Context/UserInfoContext';
import WelcomeTemplate from './WelcomeTemplate';

const Capacity = () => {
const {userInfo,userHandler}=useContext(UserInfoContext);

const body=  ( <Box align='left'  w='50%'>
               <RadioGroup >
              <Stack spacing={3} direction='column'>
              <Radio colorScheme='red' name='capacity' onChange={userHandler} value='35 hrs/week'>
               35 hrs/week
              </Radio>
              <Radio colorScheme='red' name='capacity' onChange={userHandler} value='40 hrs/week'>
              40 hrs/week
              </Radio>
            </Stack>
            </RadioGroup>
            </Box>)
    return (
        <Box>
        <WelcomeTemplate 
        head1='On average, about how many hours does each person work?'
        head2='We’ll help you visualize your team’s weekly capacity.'
        body={body}
        but_name='Next'
        link='/team_reminder'
        
        />
               </Box> 
    );
};

export default Capacity;


