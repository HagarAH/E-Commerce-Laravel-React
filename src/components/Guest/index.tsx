import './index.css'
import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../../contexts/AuthProvider";
import burgers from '../../assets/images/Group.png'
export default function Guest(){
    const {token}=useStateContext();
    if(token){
        return <Navigate to="/"/>
    }
        return (
        <>
            <div className='icon-div'>
                <img src={burgers}/>
            </div>
            <Outlet/>

        </>
)

}
