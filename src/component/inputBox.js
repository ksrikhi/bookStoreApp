import React , { useState }from 'react';
import { Box, Flex } from 'rebass';
import { Input } from '@rebass/forms';
import Button from "../component/btn.js";


const InputBox = () => {
  const [payload, setPayload] = useState({});
  const [bookList, setBookList]= useState([]);
  

  // function handleChange(evt) {
  //   const value = evt.target.value;
  //   setPayload({ ...payload, [evt.target.payload]: value });
  // }
  
  const handleChange = (key,  e) => {
    const value = e.target.value ;
    setPayload({ ...payload, [key]: value });
  }
  // const add = () => {
  //   setBookList((bookList) => {
  //     return [...bookList, payload];
  //   });
  //   setPayload({});
  // }


  const add = () => {
    bookList.push(payload);
    setBookList([...bookList]);
    setPayload({});
  }

  console.log(payload);
  console.log(bookList);
    return (
      <Box  alignItems='center'>
        List of books
      <Flex mx={-2}>
      <Box width={1/2} px={2}>
     
        <Input
        my={2}
          placeholder='Name of book'
          onChange={(e) => handleChange ('book', e)}
          value={payload.book}
        /> 
      </Box>
       <Box width={1/2} px={2}>
        <Input
        my={2}
          placeholder='Price of book'
          onChange={(e) => handleChange ('price', e)}
          value={payload.price}
        />
        </Box>
        <Box width={1/2} px={2}>
        <Input
        my={2}
          placeholder='Category of book'
          onChange={(e) => handleChange ('category', e)}
          value={payload.category}
        />
        </Box>
      </Flex>
      <Button outline onClick={add}>Add</Button>
  </Box>
    );
};
export default InputBox;

