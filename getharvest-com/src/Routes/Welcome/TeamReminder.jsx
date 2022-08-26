import { Box, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import React from 'react';
import { useContext } from 'react';
import { UserInfoContext } from '../../Context/UserInfoContext';
import WelcomeTemplate from './WelcomeTemplate';
const TeamReminder = () => {
const {userInfo,userHandler}=useContext(UserInfoContext);    
const body=  ( <Box align='left'  w='50%'>
<RadioGroup defaultValue='2'>
<Stack spacing={3} direction='column'>
<Radio colorScheme='red' value='Friday at 5pm' onChange={userHandler} name='weeklyReminder'>
Friday at 5pm
</Radio>
<Radio colorScheme='red' value='Monday at 11am' onChange={userHandler} name='weeklyReminder'>
Monday at 11am
</Radio>
</Stack>
</RadioGroup>
</Box>)
    return (
        <Box>
        <WelcomeTemplate 
        head1='When do you expect timesheets due each week?'
        head2='We’ll remind your team to track time by this deadline.'
        body={body}
        but_name='Enable Team Reminder'
        link='/personal_reminder'
        
        />
               </Box> 
    );
};

export default TeamReminder;
