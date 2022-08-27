import { Box, Flex, Img, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import React from 'react';
const day=['Mon','Tue','Wed','Thr','Fri','Sat','Sun']
const DayTab = () => {
    return (
        <Box>
<Tabs>
  <TabList >
    {
        day.map(el=>        
    <Tab w='100px' fontSize='14px'>
        <Box color='grey'>
            <Text>{el}</Text>
            <Text>0:00</Text>
        </Box>
    </Tab>
            )
    }
  </TabList>
  <TabPanels bg='#E4E9ED'>
    <TabPanel >
      <Flex h='360px' justify='center' align='center' direction='column' >
        <Img src='https://cache.harvestapp.com/static/illustrations/daily_onboard-5B4D3178.png' />
      <Text color='grey'>This is the Day view of your timesheet.</Text>
      <Text color='grey'>Keep track of where your time goes, down to the minute.</Text>
      </Flex>
    </TabPanel>
    <TabPanel>
      <Box>

      </Box>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
        </Box>
    );
};

export default DayTab;