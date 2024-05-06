import { useLayoutContext } from "../../Layouts/LayoutProvider";
import MenuLayout from "./MenuLayout";

export function Menu() {
    const { currentUser } = useLayoutContext();
    const authorizedRole = currentUser?.role?.slug?.toUpperCase();

    return <>{authorizedRole ? <MenuLayout /> : ""}</>;
}

export default Menu;
