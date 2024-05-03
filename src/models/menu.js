const childrenOffset = "2.5rem";
export const menuTree = {
    main: {
        dashboard: {
            label: "Dashboard",
            leftSection: "IconCustomHome",
            link: "/dashboard",
            active: 0,
        },
        characters: {
            label: "Characters",
            leftSection: "IconRPGSpace",
            childrenOffset: childrenOffset,
            active: 1,
            children: [
                {
                    label: "List",
                    link: "/list-character",
                    activeChild: 1.1,
                },
                {
                    label: "Create",
                    link: "/create-character",
                    activeChild: 1.2,
                },
            ],
        },
        updates: {
            label: "Updates",
            leftSection: "IconCustomUpdates",
            link: "/updates",
            active: 2,
        },
        plans: {
            label: "Plans",
            leftSection: "IconCustomPlans",
            childrenOffset: childrenOffset,
            active: 3,
            children: [
                {
                    label: "Subscribe",
                    link: "/subscribe",
                    activeChild: 3.1,
                },
                {
                    label: "Plan Configuration",
                    link: "/plans",
                    activeChild: 3.2,
                },
                {
                    label: "Change plan",
                    link: "/plans",
                    activeChild: 3.2,
                },
                {
                    label: "Cancel plan",
                    link: "/plans",
                    activeChild: 3.2,
                },
            ],
        },
        schedule: {
            label: "Schedule",
            leftSection: "IconCustomSchedule",
            link: "/schedule",
            active: 4,
        },
    },
    options: {
        settings: {
            label: "Settings",
            leftSection: "IconCustomSettings",
            childrenOffset: childrenOffset,
            active: 5,
            children: [
                {
                    label: "Link account",
                    link: "/link-account",
                    activeChild: 5.1,
                },
                {
                    label: "Manage accounts",
                    link: "/manage-accounts",
                    activeChild: 5.2,
                },
                {
                    label: "General",
                    link: "/general-configuration",
                    activeChild: 5.3,
                },
            ],
        },
    },
    footer: {
        help: {
            label: "Help",
            leftSection: "IconCustomHelp",
            link: "/help",
            active: 6,
        },
        logout: {
            label: "Logout",
            leftSection: "IconCustomLogout",
            link: "/logout",
            active: 7,
        },
    },
};

export function getMenuTree() {
    return menuTree;
}
