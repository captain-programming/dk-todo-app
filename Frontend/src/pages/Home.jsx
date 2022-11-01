import { Box, Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskList from '../component/Home/TaskList';
import { createTask } from '../store/task/task.actions';

const Home = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const [task, setTask] = useState({});
  const {userId} = useSelector((store) => store.loginReducer.data);
  const {message, status} = useSelector((store) => store.createTaskReducer.data);
  const { isOpen, onOpen, onClose} = useDisclosure();

  const getOptionValue = (e) =>{
    const {name, value} = e.target;
    setTask({
      ...task,
      [name]: value,
    });
    
  };
  const addValue = () =>{
    setTask({task: text});
    setText("");
    onOpen();
  }

  console.log(task)

  const sendDataAPI = ()=>{
    dispatch(createTask(task, userId.userId))
    // console.log(message)
    alert(message);
    onClose();
  };

  return (
    <>
    <Box width={['90%','60%']} margin='auto' mt={20}>

      <Flex>
        <Input name='task' type='text' placeholder='Enter your task' value={text} onChange={(e) => setText(e.target.value)}/>
        <Button onClick={addValue}>Add</Button>

        <Modal isOpen={isOpen} onClose={onClose} size='xs'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize={'19px'} m={-3} mt={-2}>Select Option</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack>
              <RadioGroup>
                <Stack spacing={5} direction='row'>
                  <Text fontWeight={'medium'}>Important:</Text>
                  <Radio name='important' value='true' onChange={getOptionValue}>Yes</Radio>
                  <Radio name='important' value='false' onChange={getOptionValue}>No</Radio>
                </Stack>
              </RadioGroup>
              <RadioGroup>
                <Stack spacing={5} direction='row'>
                  <Text fontWeight={'medium'}>Urgent:</Text>
                  <Radio name='urgent' value='true' onChange={getOptionValue}>Yes</Radio>
                  <Radio name='urgent' value='false' onChange={getOptionValue}>No</Radio>
                </Stack>
              </RadioGroup>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button onClick={sendDataAPI}>Next</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
      <Box>
        <TaskList />
      </Box>
    </Box>
    </>
  )
}

export default Home;