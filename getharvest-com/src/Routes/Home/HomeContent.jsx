import { Box, Button, Center, Container, Flex, Img, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../../Components/MyButton';
import { card1Data,card2Data,company } from './homeData';
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
                    {
                        company.map(el=> 
                        <Box><Img opacity='0.2' src={el.logo} /></Box>
                    )}
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
                        {
                            card1Data.map(el=>           
                <Box w='350px'>
                    <Img w='350px' src={el.img} />
                    <Text align='left' fontSize='25px' mt='10px' >{el.title}</Text>
                    <Text align='left' fontSize='18px' color='grey'>{el.desc}</Text>
                </Box>
                     )}
            </Flex>
                    <Button p='25px'  _hover={{bgColor:'#FA5D00'}} borderRadius='15px' bgColor='#FA5D00' fontSize='20px' color='white'>Get Started</Button>
                    <Box bgColor='#FA5D00' h='0.5px' m='50px 0' ></Box>
                    <Text align='left' mt='70px' fontSize='19px' fontWeight='bold' color='#FA5D00'>FEATURES</Text>
                    <Text mt='20px' align='left' fontSize='40px' >Everything you need to keep your team ticking</Text>
                    <Text m='20px 0' align='left' fontSize='30px' >Time tracking software that helps you keep time and get insights.</Text>
                    <SimpleGrid columns={[1,1,1,1,3]} gap='20px'>
                    {
                        card2Data.map(el=>    
                    <Box key={el.title} w={['','','','','350px']} border='1px solid #FA5D00' p='15px' borderRadius='10px'  >
                     <Flex h='70px' align='center' >
                    <Img w='70px' src={el.img} />
                    <Text ml='10px' fontSize='30px' >{el.title}</Text>
                    </Flex>   
                    <Text align='left' fontSize='20px'>{el.desc}</Text>
                   </Box>
                            )
                    }
                    </SimpleGrid>
                    <Button 
                    fontSize='20px'
                    bgColor='black'
                    _hover={{bgColor:'black'}}
                    color='white'  
                    borderRadius='15px'
                    display='block'
                    align='right'
                    w={['100%','','18%']}
                    p='0px 25px' m='40px 0'><Link to='/features'>Learn More</Link></Button>
                        <Box bgColor='#FA5D00' h='0.5px' m='50px 0' ></Box>
                    <SimpleGrid columns={[1,2,2]} >
                        <Box>
                            <Img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illustrations/integrations-home.svg' />
                        </Box>
                        <Box>
                    <Text align='left' mt='70px' fontSize='19px' fontWeight='bold' color='#FA5D00'>INTEGRATIONS</Text>
                    <Text mt='20px' align='left' fontSize='40px' >Integrated with the tools your team already knows and loves</Text>
                    <Text m='20px 0' align='left' fontSize='30px' >Your favorite apps work seamlessly with Harvest so you can keep projects on track however you work.</Text>   
                    <Button 
                    fontSize='20px'
                    bgColor='black'
                    color='white'  
                    borderRadius='15px'
                    display='block'
                    align='right'
                    _hover={{bgColor:'black'}}
                    w={['100%','','40%']}
                    p='0px 25px' m='40px 0'><Link to='/integrations'>Browse Integrations</Link></Button>
                        </Box>
                    </SimpleGrid>
          </Box>
        </Box>
        </Box>
    );
};

export default HomeContent;