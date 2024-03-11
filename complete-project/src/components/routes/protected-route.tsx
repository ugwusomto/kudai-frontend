
import { Navigate , Outlet } from "react-router-dom";
const ProtectedRoute = () => {

    const isAuthenticated = true;
    const unAuthenticatePath = "/sign-in"
   
    if(!isAuthenticated){
        return <Navigate replace to={`${unAuthenticatePath}`} />
    }

    return <Outlet />


}

export default ProtectedRoute;