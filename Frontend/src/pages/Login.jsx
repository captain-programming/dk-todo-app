import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/auth/auth.actions';

const Login = () => {
	const [creds, setCreds] = useState({email:"", password:""});
	const {isAuthorized, userId} = useSelector((store) => store.loginReducer.data);
	const dispatch = useDispatch();
	const navigate = useNavigate();

  const handleInputChange = (e) => {
		const {name, value} = e.target;
		setCreds({
			...creds,
			[name]: value,
		});
	};

  const isErrorEmail = creds.email === '';
  const isErrorPassword = creds.password === '';

	const onSubmit = async(e) =>{
		e.preventDefault();
		dispatch(login(creds));
	}

	// console.log(userId)

	//custom styles
	const nextPage = ()=>{
		if(isAuthorized){
			navigate("/")
		}
	}

	const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
  };

	useEffect(()=>{
		nextPage();
	}, [isAuthorized, userId]);

  return (
    <>
    <Box style={styles}>
			<Box shadow={'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'} p={10} borderRadius={10} width={'32%'}>
				<form onSubmit={onSubmit}>
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
							disabled={isErrorEmail || isErrorPassword}
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