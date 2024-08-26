import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaArrowLeftLong, FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { Badge } from 'antd';
import { Fade } from 'react-awesome-reveal';
import { useEffect } from 'react';


const Order = () => {
    const location = useLocation();
    const { state } = location;
    const [cartItemCount, setCartItemCount] = useState(0)

    if (!state) {
        return (
            <Box w={'100%'} h={'100vh'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={5}>
                <Text fontSize={'xl'} fontWeight={'bold'}>No food selected</Text>
            </Box>
        );
    }

    const { title, description, imageUrl, price } = state;
    const [quantity, setQuantity] = useState(1);
    const totalPrice = price * quantity;

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        setCartItemCount(prevCount => prevCount + quantity);
        localStorage.getItem("key", prevCount => prevCount + quantity)
    };

    useEffect(() => {

    })

    return (
        <Box w={'100%'} h={'100vh'} p={{ base: '10px', md: '20px' }} gap={10} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <Flex m={5} w={'90%'} justifyContent={'space-between'} alignItems={'center'} gap={2}>
                <Flex as={NavLink} to={'/'} justifyContent={'start'} alignItems={'center'} gap={2}>
                    <FaArrowLeftLong />
                    <Text>Back</Text>
                </Flex>
                    <Badge size={'small'} count={cartItemCount} style={{ backgroundColor: '#f91944', color: 'white' }}>
                        <SlBasket size={20} />
                    </Badge>
            </Flex>
            <Fade direction={'bottom-right'} cascade>
                <Box w={'100%'} maxW={'1200px'} h={'100%'} display={'flex'} justifyContent={'center'} flexDirection={{ base: 'column-reverse', md: 'row' }} alignItems={'center'}>
                    <Box w={'50%'} display={'flex'} justifyContent={'center'} alignItems={'start'} flexDirection={'column'} gap={5}>
                        <Text fontWeight={'bold'} fontSize={[20, 25, 30, 35, 40, 45, 50]}>{title}</Text>
                        <Text>{description}</Text>
                        <Flex justifyContent={'space-between'} alignItems={'center'} w={'50%'} gap={2}>
                            <Text fontSize={'2xl'} fontWeight={'bold'}>${totalPrice.toFixed(2)}</Text>
                            <Box display={'flex'} border={'1px solid grey'} p={2} borderRadius={'30px'} justifyContent={'space-around'} gap={3} alignItems={'center'}>
                                <FaCircleMinus color={'#f91944'} onClick={handleDecrease} size={'25px'} cursor={'pointer'} />
                                <Text fontSize={'lg'}>{quantity}</Text>
                                <FaCirclePlus color={'#f91944'} onClick={handleIncrease} size={'25px'} cursor={'pointer'} />
                            </Box>
                        </Flex>
                        <Button gap={2} borderRadius={'30px'} colorScheme={'red'} bg={'#f91944'} onClick={handleAddToCart}><SlBasket /> Add To Cart</Button>
                    </Box>
                    <Box w={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Image filter={'drop-shadow(0 10px 10px black)'} w={[200, 300, 400, 500, 600]} src={imageUrl} />
                    </Box>
                </Box>
            </Fade>
        </Box>
    );
};

export default Order;
