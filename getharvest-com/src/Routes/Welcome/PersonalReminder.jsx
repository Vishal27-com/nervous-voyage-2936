import { Box, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import React from 'react';
import { useContext } from 'react';
import { UserInfoContext } from '../../Context/UserInfoContext';
import WelcomeTemplate from './WelcomeTemplate';
const PersonalReminder = () => {
const {userInfo,userHandler}=useContext(UserInfoContext);    
const body=  ( <Box align='left'  w='50%'>
<RadioGroup >
<Stack spacing={3} direction='column'>
<Radio colorScheme='red' value='Weekdays at 9am (Mon–Fri)' onChange={userHandler} name='weeklyReminder'>
Weekdays at 9am (Mon–Fri)
</Radio>
<Radio colorScheme='red' value='Weekdays at 4pm (Mon–Fri)' onChange={userHandler} name='weeklyReminder'>
Weekdays at 4pm (Mon–Fri)
</Radio>
</Stack>
</RadioGroup>
</Box>)
    return (
        <Box>
        <WelcomeTemplate 
        head1='When do you want to be reminded to track time?'
        head2='A good prompt can help you build a habit with time tracking.'
        body={body}
        but_name='Enable Personal Reminder'
        link='/create_project'
        
        />
               </Box> 
    );
};

export default PersonalReminder;