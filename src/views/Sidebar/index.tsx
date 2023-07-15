import './index.css';
import {Link, NavLink} from "react-router-dom";
import logo from '../../assets/images/Group.png';
import bars from '../../assets/images/bars.svg';
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {useStateContext} from "../../contexts/AuthProvider";
import axiosClient from "../../axios-client";

export default function Sidebar() {
    const [mobile, setMobile] = useState(false);
    const {setUser, user, setToken, token} = useStateContext();
    const onLogout = (ev) => {
        ev.preventDefault();
        axiosClient.post('/logout').then(() => {
            setUser({});
            setToken(null);
        })

    }
    useEffect(() => {
        if (token) {

            fetchUser();
        }
    }, [token]);


    const fetchUser = async () => {
        try {
            const {data} = await axiosClient.get('/user');
            setUser(data);
        } catch (error) {
            console.error(error);
            // handle error here
        }
    };

    return (
        <>
            <div className={`d-flex justify-content-between border-bottom ${mobile ? 'mobile-show' : 'nav-bar'}`}>
                {mobile ? (
                    <div>
                        <div className="d-flex justify-content-end mx-4 my-2" onClick={() => setMobile(false)}>
                            <FontAwesomeIcon icon={faTimes} size={'2xl'} color={"#486284"}/>

                        </div>


                        <nav className="d-flex flex-column align-content-center  my-5 font-nav">
                            <NavLink to={'/'} onClick={() => setMobile(false)} className="nav-link">Home</NavLink>
                            <NavLink to={'/burgers'} onClick={() => setMobile(false)}
                                     className="nav-link">Burgers</NavLink>
                            <NavLink to={'/cart'} onClick={() => setMobile(false)}
                                     className="nav-link">Contact</NavLink>
                            <div className="d-flex flex-column justify-content-center">
                                {token ? (
                                    <>
                                        <div className="dropdown">
                                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button"
                                               id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                {user ? <span>{user.name}</span> : <span>...</span>}

                                            </a>

                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a className="dropdown-item" href="#" onClick={onLogout}>Logout</a>
                                                </li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                        <NavLink className="button-style my-2 d-flex justify-content-center"
                                                 style={{background: '#486284', color: "white"}}
                                                 onClick={() => setMobile(false)} to='/order'>
                                            Order
                                        </NavLink>
                                    </>
                                ) : (
                                    <>
                                        <NavLink className="button-style my-2 d-flex justify-content-center"
                                                 onClick={() => setMobile(false)} to='/login'>
                                            Login
                                        </NavLink>
                                        <NavLink className="button-style my-2 d-flex justify-content-center"
                                                 style={{background: '#486284', color: "white"}}
                                                 onClick={() => setMobile(false)} to='/signup'>
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
                            <NavLink to={'/'} className="nav-link">Home</NavLink>
                            <NavLink to={'/burgers'} className="nav-link">Burgers</NavLink>
                            <NavLink to={'/'} className="nav-link">Contact</NavLink>
                        </nav>

                        <Link to="/">
                            <img src={logo} alt="Logo"/>
                        </Link>
                        <nav>
                            <div className="flex-sm buttons-container">
                                {token ? (
                                    <>
                                        <div className="dropdown">
                                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button"
                                               id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                {user ? <span>{user.name}</span> : <span>. . .</span>}
                                            </a>

                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a className="dropdown-item" href="#" onClick={onLogout}>Logout</a>
                                                </li>
                                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                                <li><NavLink to={'/cart'} className="dropdown-item">My cart</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <NavLink className="button-style"
                                                 style={{background: '#486284', color: "white"}}
                                                 onClick={() => setMobile(false)} to='/order'>
                                            Order
                                        </NavLink>
                                    </>
                                ) : (
                                    <>
                                        <NavLink className="button-style" onClick={() => setMobile(false)} to='/login'>
                                            Login
                                        </NavLink>
                                        <NavLink className="button-style"
                                                 style={{background: '#486284', color: "white"}}
                                                 onClick={() => setMobile(false)} to='/signup'>
                                            Sign Up
                                        </NavLink>
                                    </>
                                )}

                            </div>
                        </nav>
                        <img onClick={() => setMobile(true)} className="bars" src={bars} alt="Bars"/>

                    </>
                )}

            </div>
        </>
    );
}
