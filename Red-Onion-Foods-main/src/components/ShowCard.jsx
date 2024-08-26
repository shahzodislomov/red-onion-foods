import { Badge, Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';

const ShowCard = ({ title, description, imageUrl, price, type }) => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/order', { state: { title, description, imageUrl, price, type } });
  };

  return (
    <Box
    overflow={'hidden'}
      border={'1px solid rgba(0,0,0,0.1)'}
      transition={'all 1s'}
      _hover={{ transform: 'scale(1.05)', boxShadow: '0 0 10px rgba(0,0,0,0.4)' }}
      borderRadius={'10px'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      w={[300, 310, 320, 330, 340, 350]}
      h={'450px'}
      p={5}
      flexDirection={'column'}
    >
    <Fade direction={'left'} cascade>
      <Flex w={'100%'} justifyContent={'start'} alignItems={'center'}>
        <Badge p={1} borderRadius={'20'} border={'1px solid orange'}>{type}</Badge>
      </Flex>

      <Image
        transition={'all 1s'}
        objectFit={'cover'}
        _hover={{ transform: 'scale(1.05)' }}
        w={200}
        src={imageUrl}
        alt={title}
        />
      <Text fontSize={[15, 16, 17, 18, 19, 20, 21, 22]}>{title}</Text>
      <Text>{description}</Text>
      <Text fontWeight={'bold'}>${price}</Text>
      <Button
        colorScheme={'red'}
        bg={'#f91944'}
        borderRadius={'200px'}
        textTransform={'capitalize'}
        onClick={handleOrderClick}
        >
        Order now
      </Button>
        </Fade>
    </Box>
  );
};

export default ShowCard;
