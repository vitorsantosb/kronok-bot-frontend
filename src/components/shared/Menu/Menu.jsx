
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons-react';


import {userRoutes} from '@/models/routes.js';
import {NavLink} from 'react-router-dom';
import {Button, ButtonGroup, Flex} from '@mantine/core';


function Menu() {
  return (
    <Flex direction={"column"} gap={"1rem"} bg={"black"} w={"96px"} h={"100%"}>
      {
        Object.keys(userRoutes).map(routeKey => (
          <NavLink to={userRoutes[routeKey]} key={routeKey}> {userRoutes[routeKey]} </NavLink>
        ))
      }
    </Flex>
  )
}

export default Menu;


/*

Object.keys(userRoutes).map(routeKey => (
          <NavLink to={userRoutes[routeKey]} key={routeKey}> {userRoutes[routeKey]} </NavLink>
        ))
 */