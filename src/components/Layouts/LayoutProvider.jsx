import { useState, createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { activeMenu } from "../../models/menu";

const LayoutContext = createContext({});

const findActive = (menu, active) => {
    const active_menu = Object.values(menu).filter((menuItem) => menuItem.link === active || menuItem.children?.filter((child) => child.link === active))[0]?.active;
    if (active_menu !== undefined) {
        return active_menu;
    }

    return -1;
};
export const LayoutProvider = ({ children }) => {
    const { pathname } = useLocation();

    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);
    const [active, setActive] = useState(-1);
    const [activeChild, setActiveChild] = useState(findActive(activeMenu, pathname));
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

    useEffect(() => {
        setActive(findActive(activeMenu, pathname));
    }, [pathname]);
    return <LayoutContext.Provider value={{ pathname, mobileOpened, toggleMobile, desktopOpened, toggleDesktop, active, setActive, activeChild, setActiveChild, currentUser }}>{children}</LayoutContext.Provider>;
};

export const useLayoutContext = () => {
    return useContext(LayoutContext);
};
