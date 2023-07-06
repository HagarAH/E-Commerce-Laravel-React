import './index.css';
import { NavLink } from "react-router-dom";
import images from '../../assets/images/Group.png';

// @ts-ignore
export default function Sidebar({ token }) {
    return (
        <>
            <div className="d-flex justify-content-between nav-bar">
                <nav className="d-flex flex-row font-nav">
                    <NavLink to={'/home'} className="nav-link">Home</NavLink>
                    <NavLink to={'/home'} className="nav-link">Burgers</NavLink>
                    <NavLink to={'/home'} className="nav-link">Contact</NavLink>
                </nav>

                <div>
                    <img  src={images} alt="Logo" />
                </div>

                {token ?
                    <div className="d-flex flex-row font-nav">
                        <button>
                            Careers
                        </button>
                        <button>
                            Order
                        </button>
                    </div>
                    :
                    <nav>
                        <div className="d-flex  buttons-container">
                            <button className="button-style">
                                Login
                            </button>
                            <button className="button-style"
                                    style={{
                                        background:'#486284',
                                        color:"white"}}>

                                Sign Up
                            </button>
                        </div>
                    </nav>
                }
            </div>
        </>
    );
}
