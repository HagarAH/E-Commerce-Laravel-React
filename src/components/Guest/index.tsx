import './index.css'
import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../../contexts/AuthProvider";
export default function Guest(){
    const {token}=useStateContext();
    if(token){
        return <Navigate to="/"/>
    }
        return (
        <>
            <Outlet/>

        </>
)

}
