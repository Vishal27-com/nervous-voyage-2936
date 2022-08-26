import { Box, Button, Container, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { useContext } from 'react';
import { UserInfoContext } from '../../Context/UserInfoContext';
import MyBox from './MyBox';
const checkbox=[
    'Asana',
    'BaseCamp',
    'GitHub',
    'Slack',
    'Trello',
    'QuickBooks Online',
    'Xero',
    'Stripe',
    'Paypal',
    'Chrome',
    'Jira',
    'Outlook.com'
]
const SignupForm2 = ({display,thirdShow,firstShow}) => {
const {userInfo,userHandler}=useContext(UserInfoContext);

    return (
        <Box display={display}>
            <Box p='20px' >
             
                <Text fontSize='30px' >Start Your Free 30-Days Trial</Text>
                <Container><Text fontSize='20px' mb='30px'>Do you want Harvest to integrate with any of your existing tools?</Text></Container>
              <SimpleGrid columns='2'>
              
              {
                  checkbox.map(el=>
                    <MyBox title={el} key={el} featureCheckbox={userHandler} />
                    )
                }  
                </SimpleGrid>

                <Text
                fontSize='18px'
                mt='20px'
                position='absolute'
                left='40px'
                p='15px 25px'
                _hover={{ color:'#fa5d00'}}
                onClick={firstShow}
                >Previous</Text>
                <Button
                color='White'
                fontSize='18px'
                mt='20px'
                position='absolute'
                right='100px'
                p='15px 25px'
                bg='#fa5d00'
                _hover={{ bg:'#fa5d00'}}
                onClick={thirdShow}
                >Next</Button>
            </Box>
        </Box>
    );
};

export default SignupForm2;