export const menuTree = {
    dashboard: {
        label: "Dashboard",
        leftSection: "IconCustomHome",
        link: "/dashboard",
    },
    characters: {
        label: "Characters",
        leftSection: "IconUser",
        childrenOffset: 28,
        children: [
            {
                label: "List",
                link: "/list-character",
            },
            {
                label: "Create",
                link: "/create-character",
            },
        ],
    },
    updates: {
        label: "Updates",
        leftSection: "IconList",
        link: "/updates",
    },
    plans: {
        label: "Plans",
        leftSection: "IconList",
        link: "/plans",
    },
    schedule: {
        label: "Schedule",
        leftSection: "IconCalendar",
        link: "/schedule",
    },
    settings: {
        label: "Settings",
        leftSection: "IconSettings",
        link: "/settings",
    },
    help: {
        label: "Help",
        leftSection: "IconMessage",
        link: "/help",
    },
    logout: {
        label: "Logout",
        leftSection: "IconLogout",
        link: "/logout",
    },
};

export function getMenuTree() {
    return menuTree;
}
