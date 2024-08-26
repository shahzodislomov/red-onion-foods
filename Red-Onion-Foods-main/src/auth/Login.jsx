import { Box, Button, Divider,Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { Fade } from 'react-awesome-reveal';

const Login = () => {
    return (
        <Box w={'100%'} h={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} bg={'url(../../public/Image/bg.png)'} backgroundPosition={'center'} backgroundSize={'cover'}>
            <Fade cascade>
                <Box gap={10} w={'380px'} display={'flex'} justifyContent={'space-around'} alignItems={'center'} flexDirection={'column'}>
                    <Image w={[150, 200, 250]} src={'../../public/Image/logo2.png'} alt={'logo'} />
                    <Box borderRadius={'10px'} w={'100%'} bg={'white'} p={5} display={'flex'} justifyContent={'space-around'} flexDirection={'column'} gap={5} alignItems={'center'}>
                        <Input variant={'outline'} bg={'white'} type={'email'} placeholder={'Email'} />
                        <Input variant={'outline'} bg={'white'} type={'password'} placeholder={'Password'} />
                        <Button w={'100%'} colorScheme={'red'} bg={'#f91944'}>Log In</Button>
                        <Text color={'#f91944'}><NavLink to={'/register'}>Need an account ?</NavLink></Text>
                        <Divider />
                        <Text color={'gray.500'}>OR</Text>
                        <Button w={'100%'} gap={5} ><FcGoogle size={'25px'} />Log In With Google</Button>
                    </Box>
                </Box>
            </Fade>
        </Box>
    )
}

export default Login