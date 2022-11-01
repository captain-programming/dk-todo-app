import { Box } from '@chakra-ui/react';
import React from 'react';
import TaskList from '../component/Home/TaskList';

const AllTask = () => {
  return (
    <Box width={'70%'} margin='auto'>
      <TaskList />
    </Box>
  )
}

export default AllTask;