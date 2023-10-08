// import { Input } from '@chakra-ui/react'
// import React from 'react'

// function Signup() {

//     const []




//   return (
//     <div><h1>Sign up</h1>
//     <Input onChange={handleName} placeholder='user name'/>
//     <Input onChange={handleEmail} placeholder='email id'/>
//     <Input onChange={handlePassword} placeholder='password'/>
//     <Button>Sign un</Button>
//     <h6 onClick={handleClick}>for sign in</h6>

//     </div>
//   )
// }

// export default Signup





import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useStatStyles,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {


  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  const[data,setData]=useState([])
  const [error,setError]=useState([])
  const [showPassword,setShowPassword]=useState('')



  const handleName=(e)=>{
    let value=e.target.value
      setName(value)
  }

  const handleEmail=(e)=>{
    let value=e.target.value 
    setEmail(value)
  }

  const handlePassword=(e)=>{
    let value=e.target.value 
    setPassword(value)
  }

  const handleClick=()=>{
    navigate("/signin")
  }

  const handleLogin=()=>{
    axios({
        url:"https://reqres.in/api/register",
        method:"POST",
        data:{
            name:name,
            password:password,
            email : email
        }
    })
    .then((res)=>{
        setData(res.data)
        navigate("/signup")

        console.log(res.data, "resss")
    })
   .catch((error)=>{
    setError(error)
   })
  }







  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl  id="firstName" isRequired>
                  <FormLabel  >First Name</FormLabel>
                  <Input  onChange={handleName} type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl   id="email" isRequired>
              <FormLabel  >Email address</FormLabel>
              <Input  onChange={handleEmail} type="email" />
            </FormControl>
            <FormControl   id="password" isRequired>
              <FormLabel   >Password</FormLabel>
              <InputGroup>
                <Input onChange={handlePassword} type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button onClick={handleLogin}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}  onClick={handleClick}>
                Already a user? <Link color={'blue.400'}  >Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}




