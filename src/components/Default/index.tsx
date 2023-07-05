import './index.css'
import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../../contexts/AuthProvider";

export default function Default(){

    const {user,token}=useStateContext();
    if(!token){
        return <Navigate to="/login"/>
    }
        return (
        <>
            <Outlet/>

        </>
)

}
