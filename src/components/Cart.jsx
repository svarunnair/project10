import { Box, Button, Image, Stack, Text, flexbox, useEditable } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart, getData, getDelete } from '../redux/data/action'

function Cart() {

    const cartData=useSelector((store)=>store.data.getCart)
    const dispatch=useDispatch()

    console.log("getCart",cartData)


    useEffect(()=>{
        dispatch(getCart())
    },[])


    const handleDelete=(id)=>{
        console.log(id,'id')
        dispatch(getDelete(id))
    }

  return (
    <Box padding="10px">
        <Text fontSize='3xl'>Selected products</Text>
        <Box display={'grid'} gridTemplateColumns={'repeat(3,1fr)'} gap="10px"  >
        {cartData?.map((item)=>(
            <Stack border={"1px solid grey"} display="flex" flexDirection='column' height={'200px'}>
                <Image height={"60px"} width={'60px'} alt="pic" src={item.image} />
            <Text fontSize='lg'>{item.name}</Text>
            <Text>{item.price}</Text>
<Button onClick={()=>handleDelete(item.id)}>Delete</Button>
            </Stack>
        ))}
        
        </Box>

    </Box>
  )
}

export default Cart