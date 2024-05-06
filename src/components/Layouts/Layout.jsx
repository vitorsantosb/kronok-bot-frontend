import { Outlet, useLocation } from "react-router-dom";
import { userRoutes } from "@/models/routes.js";
import Menu from "@/components/shared/Menu/Menu.jsx";
import config from "@/config/projectConfig.json";
import Header from "../shared/Header/Header";
import { LayoutProvider, useLayoutContext } from "./LayoutProvider";
import { AppShell } from "@mantine/core";

const Layout = () => {
    const { pathname } = useLocation();

    console.log(pathname);
    return (
        <LayoutProvider>
            {pathname !== userRoutes.HOMEPAGE && pathname !== "*" ? (
                <AppShell
                    header={{ height: 60, offset: false }}
                    navbar={{
                        width: "auto",
                        breakpoint: "sm",
                    }}
                    padding="md"
                >
                    <AppShell.Header style={{ backgroundColor: "#161A23", border: "none", alignContent: "center", justifyContent: "center" }}>
                        <Header />
                    </AppShell.Header>
                    <AppShell.Navbar
                        style={{
                            width: "auto",
                            border: "2px solid #2D2F39",
                            backgroundColor: "#161A23",
                            overflowY: "auto",
                            scrollbarWidth: "none",
                            height: "100vh",
                            borderTopRightRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20,
                        }}
                    >
                        <Menu />
                    </AppShell.Navbar>
                    <AppShell.Main bg={config.colors.background}>
                        <Outlet />
                    </AppShell.Main>
                </AppShell>
            ) : (
                <Outlet />
            )}
        </LayoutProvider>
    );
};

export default Layout;
