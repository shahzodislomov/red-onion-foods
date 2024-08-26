import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import AboutData from '../constants/AboutData'
import AboutCard from './AboutCard'

const AboutUs = () => {
    return (
        <Box w={'100%'} gap={5} p={10} display={'flex'} justifyContent={'start'} alignItems={'start'} flexDirection={'column'}>
            <Flex flexDirection={'column'}>
                <Fade direction={'left'} cascade>
                    <Text fontSize={[20, 25, 30, 35, 40, 45, 50]} >Why you choose us</Text>
                    <Text>Barton waited twenty always repair in within we do. AN delighted<br /> offending curiosity my is dashwoods at. Boy prosperous increasing<br /> surrounded.</Text>
                </Fade>
            </Flex>
            <Flex w={'100%'} justifyContent={'space-around'} alignItems={'center'} flexWrap={'wrap'} gap={5}>
                <Fade  cascade>
                    {
                        AboutData.map((item) => (
                            <AboutCard key={item.id} title={item.title} dis={item.description} logo={item.icon} img={item.img} />
                        ))
                    }
                </Fade>
            </Flex>
        </Box>
    )
}

export default AboutUs