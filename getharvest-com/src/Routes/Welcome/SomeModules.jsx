import { Box, Checkbox, Stack } from '@chakra-ui/react';
import React from 'react';
import { useContext } from 'react';
import { UserInfoContext } from '../../Context/UserInfoContext';
import WelcomeTemplate from './WelcomeTemplate';
const checkbox=[
{title:'Expense tracking'},
{title:"Approving my team's time and expenses"},
{title:'Invoicing my clients'},
{title:'Sending project estimates to my clients'}]
const SomeModules = () => {
const {userInfo,userHandler}=useContext(UserInfoContext);

const body=  (<Box align='left' >
            <Stack spacing={3}>
{
checkbox.map(el=>
<Checkbox display='block' colorScheme='red' value={el.title} name='feature' onChange={userHandler}>{el.title}</Checkbox>
)
}
            </Stack>
            </Box>)
    return (
        <Box>
        <WelcomeTemplate 
        head1='What do you want to accomplish with Harvest?'
        head2='Please select all that apply.'
        body={body}
        but_name='Next'
        link='/capacity'
        
        />
               </Box> 
    );
};

export default SomeModules;
