import { Box, Link } from '@chakra-ui/react';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ShowFood = () => {
  const activeStyle = {
    fontWeight: 'bold',
    color: 'white',
    padding: '10px',
    background: '#f91944',
    borderRadius: '120px',
  };

  return (
    <Box w={'100%'}  display={'flex'} mt={10} alignItems={'center'} flexDirection={'column'}>
      <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} gap={50}>
        
        <NavLink
          to=''
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <Link>Breakfast</Link>
        </NavLink>
        <NavLink
          to='lunch'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <Link>Lunch</Link>
        </NavLink>
        <NavLink
          to='dinner'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <Link>Dinner</Link>
        </NavLink>
      </Box>
      <Outlet />
    </Box>
  );
}

export default ShowFood;
