import './index.css'
import {Navigate, NavLink, Outlet} from "react-router-dom";
import {useStateContext} from "../../contexts/AuthProvider";
import burgers from '../../assets/images/Group.png';
import bgImage from '../../assets/images/stacked-peaks-haikei.svg';
export default function Guest(){
    const {token}=useStateContext();
    if(token){
        return <Navigate to="/"/>
    }
        return (
        <>
            <div className='icon-div'>
                <NavLink to='/'>  <img src={burgers}/></NavLink>

            </div>
            <div className='bg-div' style={{ backgroundImage: `url(${bgImage})`}}>
                <Outlet/>
            </div>


        </>
)

}
