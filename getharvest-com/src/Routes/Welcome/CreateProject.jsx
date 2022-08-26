import { Box, Flex, Input, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { postUserDetails } from '../../api';
import { UserInfoContext } from '../../Context/UserInfoContext';
import WelcomeTemplate from './WelcomeTemplate';
const CreateProject = () => {
const {userInfo,userHandler}=useContext(UserInfoContext);    
const submitHandler=()=>{
   postUserDetails(userInfo).then(res=>{
    
   })
}    
const body=(
        
        <Box>
            <label>
                Client name
                <Input bg='white' type='text' placeholder='e.g. ACME Corporation' onChange={userHandler} name='client_Name' value={userInfo.user.client_Name} />
            </label>
            <label>
                Project name
                <Input  bg='white' type='text' placeholder='e.g. Website Design etc.' onChange={userHandler} name='project_Name'  value={userInfo.user.project_Name} />
            </label>
            <RadioGroup>
            <Stack spacing={3} direction='column'>
            <Radio colorScheme='red' onChange={userHandler} name='feature' value='We bill by time & materials'>
            We bill by time & materials
            </Radio>
            <Radio colorScheme='red' onChange={userHandler} name='feature' value='We bill by fixed fees'>
            We bill by fixed fees
            </Radio>
            <Radio colorScheme='red' onChange={userHandler} name='feature' value="We don’t bill for our work">
            We don’t bill for our work
            </Radio>
            </Stack>
            </RadioGroup>
            <Stack direction='row'>
            <label>
               Budget
                <Flex direction='row' align='center'><Text >$</Text> <Input type='number' placeholder='0.00' onChange={userHandler} name='budget' value={userInfo.user.budget} /></Flex>
            </label>
            <label>
               Billable rate
                <Flex direction='row' align='center'><Text >$</Text> <Input type='number' placeholder='0.00' onChange={userHandler} name='billable_rate' value={userInfo.user.billable_rate}  /><Text>per hour</Text></Flex>
            </label>
            </Stack>
        </Box>
    )
    return (
        <Box>
        <WelcomeTemplate 
        head1='Let’s create your first project'
        head2='We’ll show you how to track time to this project and get insights from the time you tracked.'
        body={body}
        but_name='Create Project'
        link='/time'
        submitHandler={submitHandler}
        />
        </Box> 
    );
};

export default CreateProject;