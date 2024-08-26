import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Footer = () => {
    return (
        <Box w={'100%'}  bg={'#1f2937'} display={'flex'} justifyContent={'space-around'} alignItems={'center'} flexDirection={{base :'column', md:'row'}} p={10}>
            <Flex gap={20} w={{base: '100%', md:'50%'}} h={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-around'} flexDirection={'column'}>
            <Fade direction={'up'} cascade>
                <Image w={[100, 150, 200]} src='../../public/Image/logo.png' alt='logo' />
                <Text color={'gray'} >Developed by 💗 BekaDev</Text>
                </Fade>
            </Flex>
            <Flex gap={10} color={'white'} w={{base: '100%', md:'50%'}}  h={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-around'} flexDirection={'column'} p={10}>
                <Box flexDirection={{base: 'column', md: 'row'}} display={'flex'} justifyContent={'space-around'} alignItems={{base: 'start', md: 'center'}} gap={15} >
                <Fade direction={'down'} cascade>
                    <Flex  justifyContent={'start'} alignItems={'start'} flexDirection={'column'}>
                    <Fade direction={'down'} cascade>
                        <Text cursor={'pointer'} >About Online Food</Text>
                        <Text cursor={'pointer'} >Read our blog</Text>
                        <Text cursor={'pointer'} >Sign up to deliver</Text>
                        <Text cursor={'pointer'} >Add your restaurant</Text>
                        </Fade>
                    </Flex>
                    <Flex  justifyContent={'start'} alignItems={'start'} flexDirection={'column'}>
                    <Fade direction={'down'} cascade>
                        <Text cursor={'pointer'} >Get Help</Text>
                        <Text cursor={'pointer'} >Ask any question</Text>
                        <Text cursor={'pointer'} >Order Now</Text>
                        <Text cursor={'pointer'} >Contact</Text>
                        </Fade>
                    </Flex>
                    <Flex  justifyContent={'start'} alignItems={'start'} flexDirection={'column'}>
                    <Fade direction={'down'} cascade>
                        <Text cursor={'pointer'} >Facebook</Text>
                        <Text cursor={'pointer'} >Instagram</Text>
                        <Text cursor={'pointer'} >Twitter</Text>
                        <Text cursor={'pointer'} >Youtube</Text>
                        </Fade>
                    </Flex>
                    </Fade>
                </Box>
                <Flex gap={5} justifyContent={'space-around'} alignItems={'center'} flexDirection={{base: 'none', md: 'none'}} >
                <Fade direction={'down'} cascade>
                    <Text cursor={'pointer'} >Privacy Policy</Text>
                    <Text cursor={'pointer'} >Terms of Use</Text>
                    <Text cursor={'pointer'} >Pricing</Text>
                    </Fade>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Footer