import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, getTask } from '../../store/task/task.actions';

const TaskList = () => {
	const [task, setTask] = useState([]);
	const dispatch = useDispatch();
	const {userId} = useSelector((store) => store.loginReducer.data);
  const {data, status} = useSelector((store) => store.getTaskReducer.data);

	const getData =()=> {
		dispatch(getTask(userId.userId));
		if(status){
			setTask(data)
		}
	}

	const deleteTaskButton = (id)=>{
		dispatch(deleteTask(id, userId.userId))
	}

	useEffect(()=>{
		getData();
	}, [data]);

	// console.log(task)

	return (
		<>
		<Flex direction={'column'} gap={4} mt={10} mb={10}>
        {task.map((t)=>(
          <Flex p={2} shadow={'rgba(9, 120, 66, 0.25) 0px 1px 1px, rgba(9, 120, 66, 0.13) 0px 0px 1px 1px'} borderRadius={5} justifyContent={'space-between'} key={t._id}>
            <Flex width={'30%'} alignItems='center'>
              <Heading fontWeight={500} size={'sm'}>{t.task}</Heading>
            </Flex>
            <Flex gap={[2, 5]} direction={['column', 'row']} alignItems='center'>
              <Text fontWeight={500} color='red.500' fontStyle={'italic'}>{t.date}</Text>
              <Text fontWeight={500} color='red.500' fontStyle={'italic'}>{t.important ? "Important" : ""}</Text>
              <Text fontWeight={500} color='blue.500' fontStyle={'italic'}>{t.completed ? "Completed" : "Not Completed"}</Text>
              <Text fontWeight={500} color='skyblue' fontStyle={'italic'}>{t.urgent ? "Urgent" : ""}</Text>
              <Button onClick={() => deleteTaskButton(t._id)}>Delete</Button>
            </Flex>
          </Flex>
        ))}
      </Flex>
		</>
	)
}

export default TaskList