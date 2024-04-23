import {Outlet, useLocation} from 'react-router-dom';
import {userRoutes} from '@/models/routes.js';
import {AppShell} from '@mantine/core';
import Menu from '@/components/shared/Menu/Menu.jsx';

import config from '@/config/projectConfig.json';

const Layout = () => {
  const {pathname} = useLocation();

  return(
    <>
    {
      pathname !== userRoutes.HOMEPAGE && pathname !== "*" ? (
    <AppShell>
      <AppShell.Header>
        {"header"}
      </AppShell.Header>
      <AppShell.Navbar>
        <Menu/>
      </AppShell.Navbar>
      <AppShell.Main bg={config.colors.background}>
        <Outlet/>
      </AppShell.Main>
    </AppShell>
    ): (
      <Outlet/>
    )
    }
    </>
  );
}

export default Layout;