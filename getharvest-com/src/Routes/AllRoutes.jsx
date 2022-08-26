import { Box } from '@chakra-ui/react';
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './Home/Home';
import WhyHarvest from './WhyHarvest';
import Features from './Features';
import Customers from './Customers';
import Integration from './Integration';
import Pricelist from './Pricelist';
import Signup from './Signup/Signup';
import Signin from './Login/Signin';
import Welcome from './Welcome/Welcome';
import Jtbd from './Welcome/Jtbd'
import SomeModules from './Welcome/SomeModules';
import Capacity from './Welcome/Capacity';
import TeamReminder from './Welcome/TeamReminder'
import PersonalReminder from './Welcome/PersonalReminder';
import CreateProject from './Welcome/CreateProject';
import Time from './Workspace/Time';
const AllRoutes = () => {
    return (
        <Box>
           <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/why-harvest' element={<WhyHarvest />} />
            <Route path='/features' element={<Features />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/integrations' element={<Integration />} />
            <Route path='/pricing' element={<Pricelist />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/sign_in' element={<Signin />} />
            <Route path='/welcome' element={<Welcome />} />
            <Route path='/jtbd' element={<Jtbd />} />
            <Route path='/some_modules' element={<SomeModules />} />
            <Route path='/capacity' element={<Capacity />} />
            <Route path='/team_reminder' element={<TeamReminder />} />
            <Route path='/personal_reminder' element={<PersonalReminder />} />
            <Route path='/create_project' element={<CreateProject />} />
            <Route path='/time' element={<Time />} />
            </Routes> 
        </Box>
    );
};

export default AllRoutes;