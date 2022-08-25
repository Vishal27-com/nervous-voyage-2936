import { Accordion, AccordionButton,  AccordionItem, AccordionPanel, Box, Button, Flex,  Table, TableCaption, TableContainer,  Td, Text,  Thead, Tr } from '@chakra-ui/react';
import React, { useState } from 'react';
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom';
const MyAccord = ({links}) => {
    const [isOpen, setOpen] = useState(false)
    return (
        <Accordion allowToggle>
        <AccordionItem>
          <h2 >
            <AccordionButton border='12px solid black'>
              <Flex justify='space-between' w='100%' >
              <Box color={['white','','#FA5D00']} borderRight='1px solid lightgrey' pr='10px'>
          <svg width="159" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#a)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M158.045 11.961h-5.106V6.617h-3.849v5.344h-.228c-1.601 0-2.782 1.123-2.782 2.75v.813h3.01v10.728c0 3.369 1.867 5.228 5.259 5.228h3.696v-3.563h-3.163c-1.257 0-1.943-.697-1.943-1.975V15.524h1.981c1.182 0 1.906-.31 2.439-.89.42-.465.686-1.124.686-1.898v-.775Zm-21.835 7.784c-1.486-.077-2.325-.93-2.325-2.207 0-1.588 1.449-2.634 3.773-2.634 2.058 0 3.544 1.046 3.811 2.595h3.811c-.267-3.64-3.278-6.003-7.622-6.003-4.534 0-7.507 2.44-7.507 6.197 0 3.37 2.058 5.344 5.64 5.577l3.734.232c1.715.116 2.554.93 2.554 2.285 0 1.627-1.487 2.75-4.002 2.75-2.438 0-4.192-1.2-4.458-2.905h-3.849c.267 3.834 3.582 6.313 8.384 6.313 4.687 0 7.659-2.479 7.659-6.313 0-3.408-2.096-5.422-5.868-5.654l-3.735-.233Zm-21.416.891c-.419.426-.686 1.007-.8 1.666v-.581c0-3.99 2.248-6.74 5.449-6.74 2.629 0 4.497 1.821 5.03 4.726h-7.012c-1.333 0-2.134.348-2.667.93Zm13.642 1.317c0-6.197-3.086-10.457-8.993-10.457-5.488 0-9.26 4.144-9.26 10.225 0 5.925 3.696 10.224 9.527 10.224 4.496 0 7.812-2.479 8.459-6.313h-3.772c-.572 1.743-2.477 2.827-4.649 2.827-3.392 0-5.297-2.285-5.678-5.499h14.366v-1.007Zm-26.789 5.422-5.03-15.414h-4.154l6.669 19.519h4.839l6.669-19.519h-3.963l-5.03 15.414ZM87.699 11.96c-1.639 0-2.324.271-2.858.736a4.013 4.013 0 0 0-1.181 2.246v-2.982H79.81V31.48h3.849V15.795h4.23c1.715 0 2.477-.387 3.01-.968.42-.503.686-1.162.686-1.898v-.968H87.7ZM67.807 28.614c-2.172 0-3.544-1.123-3.544-2.904 0-1.743 1.334-2.866 3.468-2.866h5.145v2.866c-1.258 1.897-2.897 2.904-5.069 2.904Zm1.296-17.118c-4.801 0-8.003 2.711-8.193 6.855h3.81c.23-2.052 1.906-3.37 4.23-3.37 2.401 0 3.926 1.473 3.926 3.757v3.447c-.61-1.51-2.63-2.517-5.183-2.517-4.382 0-7.24 2.479-7.24 6.313 0 3.447 2.324 5.886 6.287 5.886 2.897 0 5.145-1.239 6.174-3.64v3.253h3.772V18.312c0-4.143-2.972-6.816-7.583-6.816Zm-17.414 0c-3.01 0-5.221 1.356-6.174 3.718V4.448h-3.849V31.48h3.85V16.066c1.523-.62 2.895-.89 4.23-.89 3.01 0 4.572 1.316 4.572 4.027V31.48h3.849V18.274c0-4.377-2.439-6.778-6.479-6.778Zm-38.183 8.288V31.48h-1.944V13.897c0-1.084.877-1.936 1.944-1.936h5.754v5.848c0 1.084-.838 1.975-1.905 1.975h-3.85ZM30.844.188v29.317c0 1.084-.876 1.975-1.943 1.975h-1.905V2.124c0-1.084.838-1.936 1.905-1.936h1.944Zm-7.697 0h1.905v29.317c0 1.084-.876 1.975-1.905 1.975h-1.944V9.947c0-1.084.877-1.936 1.944-1.936V.188ZM7.713 31.48H5.808V2.124c0-1.084.838-1.936 1.905-1.936h1.944v21.494c0 1.084-.877 1.975-1.944 1.975v7.823Zm-7.697 0V2.124C.016 1.04.892.188 1.959.188h1.906v29.317c0 1.084-.839 1.975-1.906 1.975H.016Z" fill="currentColor">
            </path>
            </g>
            </svg>  
         </Box>
         <Button variant='solid' _hover={{'bgColor':'#2B2C2C','color':'orange'}} color='white' bgColor='#2B2C2C'>
              <Hamburger size='md' toggled={isOpen} toggle={()=>setOpen(!isOpen)} />
              <Text >Menu</Text>
         </Button>
              </Flex>
            </AccordionButton>
          </h2>
          <AccordionPanel bgColor='black' >
          <TableContainer>
  <Table variant='simple'>
    <TableCaption>
<Flex justify='space-around'>
<Button p='5px 80px'  _hover={{'bgColor':'#2B2C2C','color':'orange'}} color='white' bgColor='#2B2C2C' >Sign in</Button>
<Button p='5px 50px'  _hover={{'bgColor':'#2B2C2C','color':'orange'}} color='white' bgColor='#2B2C2C' >Try Harvest free</Button> 
</Flex>
</TableCaption>
    <Thead>
    {
                    links.map(el=>
                        <Tr _hover={{'bgColor':'#2B2C2C'}}>
                        <Td>
                        <Link to={el.to} key={el.title}>
                        <Text fontSize='18px' color='white'>{el.title}</Text>
                        </Link>
                        </Td>
                        </Tr>
                        )
}

    </Thead>
  </Table>
</TableContainer>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
};

export default MyAccord;