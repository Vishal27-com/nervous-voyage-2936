import { Box,  Checkbox, Stack} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { UserInfoContext } from '../../Context/UserInfoContext';
import WelcomeTemplate from './WelcomeTemplate';
const checkbox=[
{title:'I want to track billable time to properly bill my clients'},
{title:'I want to make sure my business is on track'},
{title:'I want to better estimate future projects'},
{title:'I want to provide evidence of what my team did'}]
const Jtbd = () => {
    const {userInfo,userHandler}=useContext(UserInfoContext);
const body=  ( <Box align='left' m='10px 0'  >
    <Stack spacing={3}>
       { checkbox.map(el=> 
<Checkbox colorScheme='red' value={el.title} name='feature' onChange={userHandler}>{el.title}</Checkbox>
        )}
    </Stack>
</Box>)
    return (
        <Box>
        <WelcomeTemplate 
        head1='What do you want to accomplish with Harvest?'
        head2='Please select all that apply.'
        body={body}
        but_name='Next'
        link='/some_modules'
        
        />
               </Box> 
    );
};

export default Jtbd;


