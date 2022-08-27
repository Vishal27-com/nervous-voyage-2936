import { Box, Button, Flex, Heading, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import React from 'react';
import DayTab from './DayTab';

const MyTab = () => {
    return (
        <Box >
<Tabs w='80%' m='auto'>
  <TabList>
    <Tab>Timesheet</Tab>
    <Tab>Pending approval</Tab>
    <Tab>Unsubmitted</Tab>
    <Tab>Approved</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
     <Flex justify='space-between'>
      <Box>
        <HStack>
    <Button border='1px solid black' bg='white' _hover={{bg:'white'}}>left</Button>
    <Button border='1px solid black' bg='white' _hover={{bg:'white'}}>right</Button>
    <Heading>Today: Saturday, 27 Aug</Heading>
        </HStack>
      </Box>
      <Box>
    <Button border='1px solid black' bg='white' _hover={{bg:'white'}}>left</Button>
    <Button border='1px solid black' bg='white' _hover={{bg:'white'}}>right</Button>
      </Box>
      </Flex>
      <Box >
      <DayTab />
        </Box> 
    </TabPanel>
    <TabPanel>
      <p>Pending Approval</p>
    </TabPanel>
    <TabPanel>
      <p>Unsubmitted</p>
    </TabPanel>
    <TabPanel>
      <p>Approved</p>
    </TabPanel>
  </TabPanels>
</Tabs>
        </Box>
    );
};

export default MyTab;