import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
	const navigate = useNavigate();

	// setTimeout(()=>{
	// 	navigate("/home");
	// }, 5000);

 return (
	<>
	<Flex bg={'rgb(66,67,220)'} height={'100vh'} justifyContent='center' alignItems={'center'}>
	  <Heading size={['2xl','3xl','4xl']} color={'white'}>Welcome</Heading>
	</Flex>
	</>
  )
}

export default WelcomePage;