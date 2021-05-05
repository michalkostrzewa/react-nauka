import { useContext } from "react";
import AuthContext from "../context/authContext";

function useAuth() {
    const authContext = useContext(AuthContext);
    const auth = authContext.isAuthenticated;
    const setAuth = (value) => {
        if (value) {
            authContext.login();
        } else {
            authContext.logout();
        }
    };
    return [auth, setAuth];
}

export default useAuth;
