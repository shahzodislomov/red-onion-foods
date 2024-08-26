import { Box } from '@chakra-ui/react';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Data from '../constants/Data';
import ShowCard from './ShowCard';

const Breakfast = () => {

  const breakfastItems = Data.find((category) => category.type === "Breakfast").items;

  return (
    <Box
      w={'100%'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-around'}
      flexWrap={'wrap'}
      gap={10} 
      p={10} 
    >
      <Fade delay={10} cascade>
      {breakfastItems.map((item) => (
        <ShowCard
          key={item.id}
          title={item.name}
          description={item.info}
          imageUrl={item.img}
          price={item.price}
          type={item.type}
        />
      ))}
      </Fade>
    </Box>
  );
};

export default Breakfast;
