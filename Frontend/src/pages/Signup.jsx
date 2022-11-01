import React, { useState } from 'react';
import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react';			
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createAccount } from '../store/auth/auth.actions';
import { useEffect } from 'react';

const Login = () => {
	const [creds, setCreds] = useState({name: "", email:"", password:""});
	const {message, status} = useSelector((store) => store.signupReducer.data);
	const dispatch = useDispatch();
	const navigate = useNavigate();

  const handleInputChange = (e) => {
		const {name, value} = e.target;
		setCreds({
			...creds,
			[name]: value,
		});
	};

  const isErrorName = creds.name === '';
  const isErrorEmail = creds.email === '';
  const isErrorPassword = creds.password === '';

	const onSubmit = (e) =>{
		e.preventDefault();
		dispatch(createAccount(creds));
	}

	//custom styles
	const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
  };

	const nextPage = ()=>{
		if(status){
			navigate("/sign-in");
		}
	};

	useEffect(()=>{
		nextPage();
	}, [message, status]);

  return (
    <>
    <Box style={styles}>
			<Box shadow={'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'} p={10} borderRadius={10} width={'32%'}>
				<form onSubmit={onSubmit}>
					{/* //name */}
					<FormControl isInvalid={isErrorName}>
						<FormLabel>Full Name</FormLabel>
						<Input name='name' type='name' value={creds.name} onChange={handleInputChange} />
						{!isErrorName ? (
							<FormHelperText>
								Enter the name you'd like to call this name.
							</FormHelperText>
						) : (
							<FormErrorMessage>Name is required.</FormErrorMessage>
						)}
					</FormControl>

					{/* //email */}
					<FormControl isInvalid={isErrorEmail}>
						<FormLabel>Email</FormLabel>
						<Input name='email' type='email' value={creds.email} onChange={handleInputChange} />
						{!isErrorEmail ? (
							<FormHelperText>
								Enter the email you'd like to receive the newsletter on.
							</FormHelperText>
						) : (
							<FormErrorMessage>Email is required.</FormErrorMessage>
						)}
					</FormControl>

					{/* password */}
					<FormControl isInvalid={isErrorPassword}>
						<FormLabel>Password</FormLabel>
						<Input name='password' type='password' value={creds.password} onChange={handleInputChange} />
						{!isErrorPassword ? (
							<FormHelperText>
								Enter the password you'd like to access the app.
							</FormHelperText>
						) : (
							<FormErrorMessage>Password is required.</FormErrorMessage>
						)}
					</FormControl>

					{/* Button */}
					<Flex justifyContent={'center'}>
						<Button
							mt={10}
							w='100px'
							colorScheme='teal'
							type='submit'
							disabled={isErrorEmail || isErrorPassword || isErrorName}
						>
							Log In
						</Button>
					</Flex>
				</form>
			</Box>
    </Box>
    </>
  )
}

export default Login;