import { useContext } from "react";
import userContext from "../utils/userContext";

const Footer = () => {
    const { user } = useContext(userContext);

    return (
        <h1 className="p-10">This site is developed by {user.name}-{user.email}</h1>
    )
}


export default Footer;