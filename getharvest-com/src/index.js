import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {ChakraProvider} from '@chakra-ui/react';
import theme from './theme.config';
import UserInfoContextProvider from './Context/UserInfoContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserInfoContextProvider>
    <ChakraProvider theme={theme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ChakraProvider>
    </UserInfoContextProvider>
  </React.StrictMode>
);

