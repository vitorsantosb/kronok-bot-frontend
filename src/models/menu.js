export const menuTree = {
    dashboard: {
        label: "Dashboard",
        leftSection: "IconCustomHome",
        link: "/dashboard",
    },
    characters: {
        label: "Characters",
        leftSection: "IconRPGSpace",
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
        leftSection: "IconCustomUpdates",
        link: "/updates",
    },
    plans: {
        label: "Plans",
        leftSection: "IconCustomPlans",
        link: "/plans",
    },
    schedule: {
        label: "Schedule",
        leftSection: "IconCustomSchedule",
        link: "/schedule",
    },
    settings: {
        label: "Settings",
        leftSection: "IconCustomSettings",
        link: "/settings",
    },
    help: {
        label: "Help",
        leftSection: "IconCustomHelp",
        link: "/help",
    },
    logout: {
        label: "Logout",
        leftSection: "IconCustomLogout",
        link: "/logout",
    },
};

export function getMenuTree() {
    return menuTree;
}
