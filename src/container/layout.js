import React, { useState } from 'react';
import { Box } from "rebass";
import Button from "../component/btn.js";
import MainSection from "../component/mainSection.js";
import BookModelcard from "../component/bookModelCard.js";

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <MainSection>
        <Box>
          <Button primary  onClick={() => setIsOpen(true)}>Add</Button>
        </Box>
        {isOpen && <BookModelcard isClose={setIsOpen}/>}
      </MainSection>

  );
};

export default Layout;
