import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const AboutCard = ({ title, dis, img, logo }) => {
    return (
        <Box 
            _hover={{ 
                transform: 'scale(1.1)', 
                boxShadow: '0 0 10px rgba(0,0,0,0.2)' 
            }} 
            transition={'all 1s'} 
            gap={2} 
            borderRadius={'10px'} 
            display={'flex'} 
            justifyContent={'space-between'} 
            alignItems={'center'} 
            w={'400px'} 
            p={10} 
            flexDirection={'column'}
        >
            <Fade direction={'up'} cascade>
            <Box 
                w={'100%'} 
                overflow={'hidden'}
                borderRadius={'20px'}
            >
                <Image 
                    transition={'all 1s'} 
                    _hover={{ transform: 'scale(1.3)', }} 
                    src={img} 
                    alt={img} 
                    width={'100%'} 
                    objectFit={'cover'} 
                />
            </Box>
            <Flex justifyContent={'space-around'} alignItems={'center'} gap={2}>
                <Image src={logo} alt={logo} w={50} borderRadius={'100%'} />
                <Text fontSize={[15, 16, 17, 18, 19, 20, 21, 22]}>{title}</Text>
            </Flex>
            <Text>{dis}</Text>
            </Fade>
        </Box>
    )
}

export default AboutCard
