import { Box, Button, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Hero = () => {
    return (
        <Box
            w={'100%'}
            h={'65vh'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
            gap={10}
            backgroundImage={'url(./Image/bg.png)'}
            backgroundPosition={'center'}
            backgroundSize={'cover'}
        >
            <Fade direction={'up'} cascade>
                <Text fontWeight={'bold'} fontSize={['20px', '30px', '45px', '50px', '65px', '70px']}>
                    Best food waiting for your belly
                </Text>
            </Fade>
            <InputGroup size='sm' w={['80%', '60%', '50%', '40%']} >
                <Input
                    bg={'#ffffff'}
                    borderRadius={'200px'}
                    placeholder="Search for food..."
                />
                <InputRightElement width='5rem'>
                    <Button colorScheme={'red'} bg={'#f91944'} borderRadius={'200px'}>
                        Search
                    </Button>
                </InputRightElement>
            </InputGroup>
        </Box>
    )
}

export default Hero