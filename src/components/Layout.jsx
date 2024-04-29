import { Outlet, useLocation } from "react-router-dom";
import { userRoutes } from "@/models/routes.js";
import { AppShell, Autocomplete, rem } from "@mantine/core";
import Menu from "@/components/shared/Menu/Menu.jsx";

import config from "@/config/projectConfig.json";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";

const Layout = () => {
    const { pathname } = useLocation();
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);
    const currentUser = {
        id: "654gsdfg55-sdfgsdfg54-aflallad-fasdfldg",
        username: "Vitor Santos",
        email: "vitortest@me.com",
        avatarURL: "https://avatars.githubusercontent.com/u/6643122?v=4",
        role: {
            name: "Administrator",
            slug: "admnistrator",
        },
        admin: {
            id: "654gsdfg55-sdfgsdfg54-aflallad-fasdfldg",
            is_admin: true,
        },
        timestamp: {
            created_at: "",
            updated_at: "",
            edited_at: "",
        },
    };

    return (
        <>
            {pathname !== userRoutes.HOMEPAGE && pathname !== "*" ? (
                <AppShell
                    header={{ height: 60, offset: false }}
                    navbar={{
                        width: mobileOpened || desktopOpened ? "300px" : "auto",
                        breakpoint: "sm",
                    }}
                    padding="md"
                >
                    <AppShell.Header style={{ backgroundColor: "#161A23", border: "none", alignContent: "center", justifyContent: "center" }}>
                        <Autocomplete
                            style={{
                                width: "50%",
                                margin: " 0 auto",
                            }}
                            placeholder="Search"
                            leftSection={<IconSearch style={{ color: "white", width: rem(16), height: rem(16) }} stroke={1.5} />}
                            data={["React", "Angular", "Vue", "Next.js", "Riot.js", "Svelte", "Blitz.js"]}
                            visibleFrom="xs"
                            styles={{ input: { backgroundColor: "#5b5e65", color: "white" } }}
                        />
                    </AppShell.Header>
                    <AppShell.Navbar
                        style={{
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
                        <Menu currentUser={currentUser} toggleMobile={toggleMobile} toggleDesktop={toggleDesktop} mobileOpened={mobileOpened} desktopOpened={desktopOpened} />
                    </AppShell.Navbar>
                    <AppShell.Main bg={config.colors.background}>
                        <Outlet />
                    </AppShell.Main>
                </AppShell>
            ) : (
                <Outlet />
            )}
        </>
    );
};

export default Layout;
