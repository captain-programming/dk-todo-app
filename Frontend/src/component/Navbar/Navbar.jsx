import { Flex } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Flex justifyContent={'space-between'} alignItems='center' p={2} bg='blackAlpha.200' fontWeight={500} color={'blue.600'}>
      <NavLink to={'/'}>Home</NavLink>
      <Flex gap={10} alignItems='center'>
        <NavLink to='/all-task'>All Task</NavLink>
        <NavLink to='/important-task'>Important Task</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/sign-in'>Log in</NavLink>
        <NavLink to='/sign-up'>Sign up</NavLink>
      </Flex>
    </Flex>
    </>
  )
}

export default Navbar