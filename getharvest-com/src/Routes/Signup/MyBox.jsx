import { Box, Checkbox } from '@chakra-ui/react';
import React from 'react';

const MyBox = ({title,featureCheckbox}) => {
    return (
        <Box align='left' border='1px solid grey' fontSize='20px' p='10px' m='5px' borderRadius='10px'>
            <Checkbox 
            value={title}
            name='feature'
            onChange={(e)=>featureCheckbox(e)}
            >{title}</Checkbox>
        </Box>
    );
};

export default MyBox;