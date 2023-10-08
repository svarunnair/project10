



import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
} from '@chakra-ui/react'
import axios from 'axios';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Signin() {


    const [email,setEmail]=useState('')
    const [password,setPassword]=useState("")
    const userData = JSON.parse(localStorage.getItem('cridential'));
    const [data,setData]=useState([])
    const[error,setError]=useState([])
    const navigate=useNavigate()

    const handleEmail=(e)=>{
       let value=e.target.value 
       setEmail(email)
    }

    const handlePassword=(e)=>{
        let value=e.target.value 
        setPassword(password)
    }

    const handleSubmit=()=>{
        axios({
            url:"https://reqres.in/api/login",
            method : "POST",
            data:{
                email:email,
                password:password
            }
        })
        .then((res)=>{
            setData(res.data)
            if(res.data.token){
                localStorage.setItem('Token', res.data.token)
            }
            // else{
            //     Alert('Account do not exist')
            // }
            navigate("/home")
        })
        .catch((error)=>{
            setError(error)
        })
    }

    const handleClick=()=>{
        navigate('/signup')
    }



  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input onChange={handleEmail} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input  onChange={handlePassword} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>

              <Stack pt={6}>
              <Text align={'center'}  onClick={handleClick}>
                Don't have an account? <Link color={'blue.400'}  >Signup</Link>
              </Text>
              </Stack>



              <Button onClick={handleSubmit}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}