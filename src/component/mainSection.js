import React from 'react';
import { Box } from 'rebass';

const MainSection = ({ children }) => {
    return (
            <Box width={[1, 1, 1, '64em']} px={'20px'} mx={'auto'}>
              {children}
            </Box>
    );
};
export default MainSection;