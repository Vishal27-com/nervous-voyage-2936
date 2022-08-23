import { Box, Button, Center, Container, Flex, Heading, Img, Text } from '@chakra-ui/react';
import React from 'react';
import MyButton from '../../Components/MyButton';

const HomeContent = () => {
    return (
        <Box>
            <Container mt='60px'>
               <Center>
                <Img src="https://res.cloudinary.com/spiralyze/image/upload/v1657791092/Harvest/1029-Harvest-Home-Center-Align/Rate_stars_1.svg" />
                <Text m='0 5px' display='flex' fontSize='18px'>4.6 <Text color='grey' display='flex' >(491 reviews)</Text></Text>
               </Center>
            </Container>
            <Box w='60%' m='auto'>
            <Box >
               <Text fontSize='45px'>Finally, time tracking that your team actually wants to use.</Text>
            </Box>
            <Box m='15px 0'>
               <Text fontSize='18px' color='grey'>Intuitive time tracking. Instant report generation. Automatic invoice creation.</Text>
            </Box>
            <Box m='20px 0'>
            <MyButton size='18px' wei='400'>Try Harvest free</MyButton>
            </Box>
            <Box >
            <Text m='10px 0' fontSize='15px' color='grey'>Free 30-day trial. No credit card required.</Text>
            </Box>
            </Box>
          <Box w='90%' m='auto' >
            <Img  src='https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1029-Harvest-Home-Center-Align/Hero_Image_2x.jpg' />
          <Box>
            <Flex align='center' h='20px'>
                <Text fontSize='20px' color='#FA5D00'>70,000+</Text>
                <Text fontSize='20px' color='grey'>
                     companies track time with Harvest
                </Text>
                <Box bgColor='#FA5D00' h='0.5px' w='60%'></Box>

                </Flex>
                <Flex h='150px' align='center' justify='space-around'>
                    <Box><Img opacity='0.2' src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize' /></Box>
                    <Box><Img opacity='0.2' src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize' /></Box>
                    <Box><Img opacity='0.2' src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize' /></Box>
                    <Box><Img opacity='0.2' src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize' /></Box>
                    <Box><Img opacity='0.2' src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize' /></Box>
                    <Box><Img opacity='0.2' src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize' /></Box>
                    <Box><Img opacity='0.2' src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize' /></Box>
                    <Box><Img opacity='0.2' src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize' /></Box>
                </Flex>
          </Box>
          </Box>
          <Box bgColor='#FA5D00' h='0.5px'></Box>

        <Box w='90%' m='40px auto'>
            <Box w='60%' m='auto'>
               <Text fontSize='35px'>Getting Started</Text>
            </Box>
            <Box m='15px 0'>
               <Text fontSize='25px'>Time tracking so easy, your team will actually use it.</Text>
            </Box>
          <Box>
            <Flex h='400px' align='center' justify='space-around'>
                <Box w='350px'>
                    <Img w='350px' src='https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1006_Harvest_Home_How_It_Works-20220601/Create_a_projects1.png' />
                <Text align='left' fontSize='25px' mt='10px' >Create a project</Text>
                <Text align='left' fontSize='18px' color='grey'>Create entries for your projects and tasks, or import them via one of our integrations.</Text>
                </Box>
                <Box w='350px'>
                    <Img w='350px' src='https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1006_Harvest_Home_How_It_Works-20220601/Track_time.png' />
                    <Text align='left' fontSize='25px' mt='10px' >Track time</Text>
                <Text align='left' fontSize='18px' color='grey'>Click start to begin tracking time. Stop and start timers as you switch tasks.</Text>
                    </Box>
                <Box w='350px'>
                    <Img w='350px' src='https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1006_Harvest_Home_How_It_Works-20220601/Img_step3.png' />
                    <Text align='left' fontSize='25px' mt='10px' >Generate reports & invoices</Text>
                <Text align='left' fontSize='18px' color='grey'>Easily convert time entries into internal reporting or client invoices.</Text>
                    </Box>
            </Flex>
                    <Button p='25px' borderRadius='15px' bgColor='#FA5D00' fontSize='20px' color='white'>Get Started</Button>
                    <Box bgColor='#FA5D00' h='0.5px' m='50px 0' ></Box>

                    <Text align='left' mt='70px' fontSize='19px' fontWeight='bold' color='#FA5D00'>FEATURES</Text>
                    <Text mt='20px' align='left' fontSize='40px' >Everything you need to keep your team ticking</Text>
                    <Text m='20px 0' align='left' fontSize='30px' >Time tracking software that helps you keep time and get insights.</Text>
                   <Box w='350px'>
                    <Img src='https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1029-Harvest-Home-Center-Align/time-tracking.png' />
                    <Text>Time tracking</Text>
                    <Text>Simple and intuitive time tracking your team will love</Text>
                   </Box>
          </Box>

        </Box>
        </Box>
    );
};

export default HomeContent;