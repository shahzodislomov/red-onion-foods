import { Button, Flex, Img } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [scrollBackground, setScrollBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrollBackground(true);
            } else {
                setScrollBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Flex
            position={'fixed'}
            w={'100%'}
            h={'70px'}
            justifyContent={'space-between'}
            alignItems={'center'}
            bg={scrollBackground ? 'white' : 'transparent'}
            boxShadow={scrollBackground ? 'sm' : 'none'}
            transition={'background-color 1s ease'}
            zIndex={1000}

        >
            <NavLink to={''}>
                <Img ml={10} w={[100, 150]} src='./Image/logo2.png' alt='logo' />
            </NavLink>
            <Flex mr={10} gap={5} justifyContent={'space-around'} alignItems={'center'}>
                <Fade whileDrag={true} >
                    <NavLink to={'login'}>
                        Login
                    </NavLink>
                    <NavLink to={'register'}>
                        <Button colorScheme={'red'} bg={'#f91944'} borderRadius={'200px'}>
                            Register
                        </Button>
                    </NavLink>
                </Fade>
            </Flex>
        </Flex>
    );
}

export default Header;
