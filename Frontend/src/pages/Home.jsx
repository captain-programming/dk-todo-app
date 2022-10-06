import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const Home = () => {
  return (
    <>
    <Flex bg={'rgb(66,67,220)'} height={'100vh'} justifyContent='center' alignItems={'center'}>
	<Heading size={['2xl','3xl','4xl']} color={'white'}>Welcome</Heading>
    </Flex>
    </>
  )
}

export default Home;