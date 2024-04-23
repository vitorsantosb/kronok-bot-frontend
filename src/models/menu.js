export const menuTree  = {
  dashboard: {
    label: "Dashboard",
    leftSection: "IconHome2",
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
      }
    ]
  },
};

export function getMenuTree(){
  return menuTree;
}

