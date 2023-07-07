import './index.css';
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/Group.png';
import bars from '../../assets/images/bars.svg';
import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
export default function Sidebar({ token }) {
    const [mobile, setMobile] = useState(false);

    return (
        <>
            <div className={`d-flex justify-content-between border-bottom ${mobile ? 'mobile-show' : 'nav-bar'}`}>
                {mobile ? (
                    <div>
                        <div className="d-flex justify-content-end mx-4 my-2"  onClick={() => setMobile(false)}>
                            <FontAwesomeIcon icon={faTimes} size={'2xl'} color={"#486284"}/>

                        </div>


                        <nav className="d-flex flex-column align-content-center  my-5 font-nav">
                            <NavLink to={'/home'} onClick={() => setMobile(false)} className="nav-link">Home</NavLink>
                            <NavLink to={'/home'} onClick={() => setMobile(false)} className="nav-link">Burgers</NavLink>
                            <NavLink to={'/home'} onClick={() => setMobile(false)} className="nav-link">Contact</NavLink>
                            <div className="d-flex flex-column justify-content-center">
                                {token ? (
                                    <>
                                        <NavLink className="button-style my-2 d-flex justify-content-center" onClick={() => setMobile(false)} to='/login'>
                                            Careers
                                        </NavLink>
                                        <NavLink className="button-style my-2 d-flex justify-content-center" style={{ background: '#486284', color: "white" }} onClick={() => setMobile(false)} to='/signup'>
                                            Order
                                        </NavLink>
                                    </>
                                ) : (
                                    <>
                                        <NavLink className="button-style my-2 d-flex justify-content-center" onClick={() => setMobile(false)} to='/login'>
                                            Login
                                        </NavLink>
                                        <NavLink className="button-style my-2 d-flex justify-content-center" style={{ background: '#486284', color: "white" }} onClick={() => setMobile(false)} to='/signup'>
                                            Sign Up
                                        </NavLink>
                                    </>
                                )}

                            </div>
                        </nav>


                    </div>


                ) : (
                    <>
                        <nav className="flex-md flex-row font-nav">
                            <NavLink to={'/home'} className="nav-link">Home</NavLink>
                            <NavLink to={'/home'} className="nav-link">Burgers</NavLink>
                            <NavLink to={'/home'} className="nav-link">Contact</NavLink>
                        </nav>

                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                        <nav>
                            <div className="flex-sm buttons-container">
                                {token ? (
                                    <>
                                        <NavLink className="button-style" onClick={() => setMobile(false)} to='/login'>
                                            Careers
                                        </NavLink>
                                        <NavLink className="button-style" style={{ background: '#486284', color: "white" }} onClick={() => setMobile(false)} to='/signup'>
                                            Order
                                        </NavLink>
                                    </>
                                ) : (
                                    <>
                                        <NavLink className="button-style" onClick={() => setMobile(false)} to='/login'>
                                            Login
                                        </NavLink>
                                        <NavLink className="button-style" style={{ background: '#486284', color: "white" }} onClick={() => setMobile(false)} to='/signup'>
                                            Sign Up
                                        </NavLink>
                                    </>
                                )}

                            </div>
                        </nav>
                        <img onClick={() => setMobile(true)} className="bars" src={bars} alt="Bars" />

                    </>
                )}

            </div>
        </>
    );
}
