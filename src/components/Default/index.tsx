import './index.css'
import { Outlet} from "react-router-dom";
import {useStateContext} from "../../contexts/AuthProvider";
import Sidebar from "../../views/Sidebar";

export default function Default(){

    const {token}=useStateContext();

    // if(!token){
    //     return <Navigate to="/signup"/>
    // }

    return (
        <>
            <div>
                <Sidebar token={token} />
            </div>
            <Outlet/>

        </>
)

}
