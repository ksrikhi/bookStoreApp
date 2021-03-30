import React from 'react';
import './bookModelCard.css';
import InputBox from "./inputBox.js";
import { Box, Flex } from "rebass";
import MainSection from "../component/mainSection.js";




const BookModelcard = ({isClose}) => {
    return (
      <MainSection>
        <Box id="myModal" className="modal">
        <Box className="modal-content">
          <span className="close" onClick={() => isClose(false)}>&times;</span>
          <Flex mx={-2}>
  <Box width={1} >
  <InputBox />
  </Box>
</Flex>
  </Box> 
      </Box>
      </MainSection>
    );
};
 
export default BookModelcard ;