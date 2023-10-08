// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getData } from '../redux/data/action'

// function Home() {

//   const data= useSelector(store=>store.data.data)
//   const dispatch=useDispatch()


//   console.log("data",data)

//   useEffect(()=>{
//     dispatch(getData())
//   })
//   return (
//     <div>Home

      



//     </div>
//   )
// }

// export default Home





import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  
  Icon,
  chakra,
  Tooltip,
  Button,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { getCart, getData, postData } from '../redux/data/action'
import { useNavigate } from 'react-router-dom'
import { all } from 'axios'


const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
}



function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            )
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />
        })}
      <Box as="span" ml="2" color="yellow.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  )
}

function Home() {

  const allData= useSelector(store=>store.data.data)
  const dispatch=useDispatch()
  const [sort,setSort]=useState([]);
  


  console.log("data",allData)


  const handleSort=()=>{
    let sortData=allData.sort((a,b)=>{
    return (b.price-a.price)
  })
  console.log(sortData,"srt")
  setSort([...sortData])
}



const handleSortL=()=>{
  let sortData=allData.sort((a,b)=>{
  return (a.price-b.price)
})
console.log(sortData,"srt")
setSort([...sortData])
}
// const handleBrand=()=>{
//   allData.name
//   }

// const handleMale=()=>{
//   allData.sort((item)=>{item!==allData.category.Women s Dresses})
// }
  
  
  

  useEffect(()=>{
    dispatch(getData())
  },[])




  useEffect(()=>{
   setSort(allData)
  },[allData])

  console.log("sort,",sort)
 const handleCart=(item)=>{
  item.quant=1
   dispatch(postData(item))
 }


 const handleAddCart=(item)=>{
  dispatch(postData(item))
  
 }

 const handleMale=()=>{
  let male=allData.filter((item)=>{
    return item.for==="Men"
  })
  setSort(male)
  console.log(male,"makle")
 }


 const handleFemale=()=>{
  let female=allData.filter((item)=>{
    return item.for==="Women"
  })
  setSort(female)
 
 }


 let date = new Date();


  
  return (


  <>

  <><Button onClick={handleSort}>Sort high to low</Button>
  <Button onClick={handleSortL}>Sort low to high</Button>
  <Button onClick={handleMale}>Sort Male</Button>
  <Button onClick={handleFemale}>Sort Female</Button>
  </>
    {sort?.map((item)=>(
      
      <>
      
      <>
       <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {data.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
        )}

        <Image src={item.image} alt={`Picture of ${data.name}`} roundedTop="lg" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">

          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              color="white"
              lineHeight="tight"
              isTruncated>
              {item.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon  h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Button color={'white'} textColor={"green"} onClick={()=>handleAddCart(item)}>Add to cart</Button>




          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={data.rating} numReviews={data.numReviews} />
            <Box fontSize="2xl" color={('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                £
              </Box>
              {data.price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
      </>
      </>
    ))}
    </>
    
    
   
  )
}

export default Home