import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Box, Burger, Button, Center, Collapse, Flex, Group, NavLink, Portal, Stack, Text, Tooltip, UnstyledButton, rem } from "@mantine/core";
import { IconGauge, IconFingerprint, IconHome, IconDashboard, IconNotebook, IconCalendarEvent, IconReceipt, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { IconCalendar, IconMessage, IconSettings, IconUser } from "@tabler/icons-react";
import { getMenuTree } from "@/models/models";
import { userRoutes } from "@/models/models";
import { IconUsersGroup } from "@tabler/icons-react";
import IconCustomHome from "../../../assets/menu/IconCustomHome";

const getMantineIcons = (icon) => {
    switch (icon) {
        case "IconCustomHome":
            return <IconCustomHome size={{ width: 24, height: 24 }} style={{ strokeWidth: 2.5, fill: "#FFFFFF", cursor: "pointer" }} />;
        case "IconGauge":
            return <IconGauge stroke={1.0} style={{ cursor: "pointer" }} />;
        case "IconFingerprint":
            return <IconFingerprint stroke={1.0} style={{ cursor: "pointer" }} />;
        case "IconCalendar":
            return <IconCalendar stroke={1.0} style={{ cursor: "pointer" }} />;
        case "IconCalendarEvent":
            return <IconCalendarEvent stroke={1.0} style={{ cursor: "pointer" }} />;
        case "IconMessage":
            return <IconMessage stroke={1.0} style={{ cursor: "pointer" }} />;
        case "IconSettings":
            return <IconSettings stroke={1.0} style={{ cursor: "pointer" }} />;
        case "IconUser":
            return <IconUser stroke={1.0} style={{ cursor: "pointer" }} />;
        case "IconUsersGroup":
            return <IconUsersGroup stroke={1.0} style={{ cursor: "pointer" }} />;
        case "IconHome":
            return <IconHome stroke={1.0} style={{ cursor: "pointer" }} />;
        case "IconDashboard":
            return <IconDashboard stroke={1.0} style={{ cursor: "pointer" }} />;
        case "IconNotebook":
            return <IconNotebook stroke={1.0} style={{ cursor: "pointer" }} />;
        case "IconReport":
            return <IconReceipt stroke={1.0} style={{ cursor: "pointer" }} />;
        default:
            return "";
    }
};
const renderNavLink = (menuItem, index, navigate, currentUser, toggleMobile, mobileOpened, desktopOpened, active, setActive) => {
    const { label, children, leftSection, ...rest } = menuItem;
    const [toggleChildren, setToggleChildren] = useState(false);
    function redirectToUserRoute(userRoute) {
        navigate(userRoute.link);
    }

    function redirectionToInitialPage() {
        navigate(userRoutes.HOMEPAGE);
    }
    function handleClickMenuItem(userRoute) {
        if (rest.childrenOffset && !mobileOpened && !desktopOpened) {
            toggleMobile(true);
        }

        if (userRoute.link) {
            currentUser ? (currentUser?.role?.slug ? redirectToUserRoute(userRoute) : redirectionToInitialPage()) : navigate(userRoutes.HOMEPAGE);
        }
    }

    return (
        <Tooltip key={index} label={label} position="right" withArrow disabled={mobileOpened || desktopOpened}>
            <Box
                key={index}
                onClick={() => {
                    setActive(index);
                    setToggleChildren(!toggleChildren);
                    handleClickMenuItem(rest);
                }}
                c={"var(--mantine-color-white)"}
            >
                {mobileOpened || desktopOpened ? (
                    <Group w={"100%"} style={{ color: "var(--mantine-color-white)", display: "flex", gap: "0.5rem", cursor: "pointer" }}>
                        {leftSection && getMantineIcons(leftSection)}
                        {label}
                        {children && (toggleChildren ? <IconChevronLeft size={14} /> : <IconChevronRight size={14} />)}
                    </Group>
                ) : (
                    getMantineIcons(leftSection)
                )}
                {children && (
                    <Collapse in={toggleChildren} active={index === active ? index : null} style={{ paddingLeft: mobileOpened || desktopOpened ? rest.childrenOffset || 0 : 0 }}>
                        {children.map((child, childIndex) => renderNavLink(child, childIndex, navigate, currentUser, toggleMobile, mobileOpened, desktopOpened, active, setActive))}
                    </Collapse>
                )}
            </Box>
        </Tooltip>
    );
};

const renderMenu = (menuObject, navigate, currentUser, toggleMobile, mobileOpened, desktopOpened, active, setActive) => {
    return Object.keys(menuObject).map((key, index) => {
        const menuItem = menuObject[key];
        return renderNavLink({ label: key, ...menuItem }, index, navigate, currentUser, toggleMobile, mobileOpened, desktopOpened, active, setActive);
    });
};

export function Menu({ onMenuButton, currentUser, toggleMobile, toggleDesktop, mobileOpened, desktopOpened }) {
    const [menuOpen, setMenuOpen] = useState(true);
    const [active, setActive] = useState(0);

    const authorizedRole = currentUser?.role?.slug?.toUpperCase();
    const modifiedMenuTree = getMenuTree(currentUser?.role?.permissions);
    const navigate = useNavigate();

    return (
        <>
            {authorizedRole ? (
                <Flex style={{ position: "relative" }} w={"100%"} h={"100svh"} p={"1rem"} justify={"space-between"} direction={"column"} bg={"#161A23"}>
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
                        <Stack align={mobileOpened || desktopOpened ? "left" : "center"} gap={0}>
                            {renderMenu(modifiedMenuTree, navigate, currentUser, toggleMobile, mobileOpened, desktopOpened, active, setActive)}
                        </Stack>
                    </Stack>
                </Flex>
            ) : (
                ""
            )}
        </>
    );
}

export default Menu;
