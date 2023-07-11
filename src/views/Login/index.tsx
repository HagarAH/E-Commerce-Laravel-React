import './index.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import 'animate.css';


export default function Login() {
    return (
        <div className='login-div animate__animated animate__fadeInDown'>
            <h1 className='h1-txt animate__animated animate__swing animate__delay-1s'>Login</h1>
            <form>
                <label>Email</label>
                <span>  <FontAwesomeIcon color={'#486284'} icon={faUser}/><input
                    placeholder='Enter your email'/> </span>
                <label>Password</label>
                <span>  <FontAwesomeIcon color={'#486284'} icon={faLock}/><input
                    placeholder='Enter your password'/> </span>
                <a className='a-css'>forgot password</a>
                <div><input type='checkbox'/>

                    <label>Remember me</label>

                </div>

                <div className='buttons-div'>
                    <button type='submit' className='button-style'>Log in</button>
                    <NavLink to={'/signup'} className='a-css'>Register</NavLink>
                </div>

            </form>

        </div>

    )

}
