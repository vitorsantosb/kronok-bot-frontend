import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Burger, Center, Flex, Group, NavLink, Portal, Stack, Text } from "@mantine/core";
import { IconGauge, IconFingerprint, IconHome, IconDashboard, IconNotebook, IconCalendarEvent, IconReceipt, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { IconCalendar, IconMessage, IconSettings, IconUser } from "@tabler/icons-react";
import { getMenuTree } from "@/models/models";
import { userRoutes } from "@/models/models";
import { IconUsersGroup } from "@tabler/icons-react";
import IconCustomHome from "../../../assets/menu/IconCustomHome";

const getMantineIcons = (icon) => {
    switch (icon) {
        case "IconCustomHome":
            return <IconCustomHome size={{ width: 20, height: 20 }} style={{ strokeWidth: 1.5, fill: "#FFFFFF" }} />;
        case "IconGauge":
            return <IconGauge stroke={1.5} />;
        case "IconFingerprint":
            return <IconFingerprint stroke={1.5} />;
        case "IconCalendar":
            return <IconCalendar stroke={1.5} />;
        case "IconCalendarEvent":
            return <IconCalendarEvent stroke={1.5} />;
        case "IconMessage":
            return <IconMessage stroke={1.5} />;
        case "IconSettings":
            return <IconSettings stroke={1.5} />;
        case "IconUser":
            return <IconUser stroke={1.5} />;
        case "IconUsersGroup":
            return <IconUsersGroup stroke={1.5} />;
        case "IconHome":
            return <IconHome stroke={1.5} />;
        case "IconDashboard":
            return <IconDashboard stroke={1.5} />;
        case "IconNotebook":
            return <IconNotebook stroke={1.5} />;
        case "IconReport":
            return <IconReceipt stroke={1.5} />;
        default:
            return "";
    }
};
const renderNavLink = (menuItem, index, navigate, currentUser, toggleMobile, mobileOpened, desktopOpened) => {
    const { label, children, leftSection, ...rest } = menuItem;

    function redirectToUserRoute(userRoute) {
        toggleMobile(false);
        navigate(userRoute.link);
    }

    function redirectionToInitialPage() {
        toggleMobile(false);
        navigate(userRoutes.HOMEPAGE);
    }
    function handleClickMenuItem(userRoute) {
        if (userRoute.link) {
            currentUser ? (currentUser?.role?.slug ? redirectToUserRoute(userRoute) : redirectionToInitialPage()) : navigate(userRoutes.HOMEPAGE);
        }
    }

    return (
        <NavLink key={index} label={mobileOpened || desktopOpened ? label : null} onClick={() => handleClickMenuItem(rest)} leftSection={getMantineIcons(leftSection)} {...rest} w={mobileOpened || desktopOpened ? "100%" : "20px"}>
            {children && Array.isArray(children) && <div style={{ paddingLeft: rest.childrenOffset || 0 }}>{children.map((child, childIndex) => renderNavLink(child, childIndex, navigate, currentUser, toggleMobile, mobileOpened, desktopOpened))}</div>}
        </NavLink>
    );
};

const renderMenu = (menuObject, navigate, currentUser, toggleMobile, mobileOpened, desktopOpened) => {
    return Object.keys(menuObject).map((key, index) => {
        const menuItem = menuObject[key];
        return renderNavLink({ label: key, ...menuItem }, index, navigate, currentUser, toggleMobile, mobileOpened, desktopOpened);
    });
};

export function Menu({ onMenuButton, currentUser, toggleMobile, toggleDesktop, mobileOpened, desktopOpened }) {
    const [menuOpen, setMenuOpen] = useState(true);

    const authorizedRole = currentUser?.role?.slug?.toUpperCase();
    const modifiedMenuTree = getMenuTree(currentUser?.role?.permissions);
    //AllowedRoutesByRole[authorizedRole]
    const navigate = useNavigate();

    return (
        <>
            {authorizedRole ? (
                <Flex style={{ position: "relative" }} p={"1rem"} w={"100%"} h={"100svh"} justify={"space-between"} direction={"column"} bg={"#161A23"}>
                    <Stack>
                        <Flex
                            style={{
                                position: "sticky",
                                bottom: 0,
                                left: 0,
                                background: "#161A23",
                                border: "none",
                                width: "100%",
                            }}
                        >
                            <Group w={mobileOpened || desktopOpened ? "100%" : "auto"} justify={"space-between"}>
                                <Group align={"center"} position={"relative"}>
                                    <Avatar src={currentUser.avatarURL ? currentUser.avatarURL : "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"} radius="xl" />

                                    {(mobileOpened || desktopOpened) && (
                                        <div style={{ flex: 1 }}>
                                            <Text c="dimmed" size="sm" fw={500}>
                                                {currentUser.username}
                                            </Text>

                                            <Text c="dimmed" size="xs">
                                                {currentUser.role.name}
                                            </Text>
                                        </div>
                                    )}
                                    {mobileOpened || desktopOpened ? (
                                        <IconChevronLeft
                                            style={{
                                                cursor: "pointer",
                                                width: "20px",
                                                height: "20px",
                                                position: "absolute",
                                                left: "100%",
                                                border: "2px solid #2D2F39",
                                                borderRadius: "5px",
                                            }}
                                            color="#c9c9c9"
                                            onClick={toggleMobile}
                                        />
                                    ) : (
                                        <IconChevronRight
                                            style={{
                                                cursor: "pointer",
                                                width: "20px",
                                                height: "20px",
                                                position: "absolute",
                                                left: "100%",
                                                border: "2px solid #2D2F39",
                                                borderRadius: "5px",
                                                zIndex: 999,
                                            }}
                                            color="#c9c9c9"
                                            onClick={toggleMobile}
                                        />
                                    )}
                                </Group>
                            </Group>
                        </Flex>
                        <Flex pb={"20svh"} p={"1rem"} direction={"column"}>
                            {renderMenu(modifiedMenuTree, navigate, currentUser, toggleMobile, mobileOpened, desktopOpened)}
                        </Flex>
                    </Stack>
                </Flex>
            ) : (
                ""
            )}
        </>
    );
}

export default Menu;
