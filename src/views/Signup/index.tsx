import './index.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import 'animate.css';

export default function Signup() {
    return (
        <div className='signup-div animate__animated animate__fadeInDown'>
            <h1 className='h1-txt animate__animated animate__swing animate__delay-1s'>Register</h1>
            <form>
                <label>Email</label>
                <span>  <FontAwesomeIcon color={'#486284'} icon={faUser}/><input
                    placeholder='Enter your email'/> </span>
                <label>Password</label>
                <span>  <FontAwesomeIcon color={'#486284'} icon={faLock}/><input type='password'
                    placeholder='Enter your password'/> </span>
                <label> Confirm password</label>
                <span>  <FontAwesomeIcon color={'#486284'} icon={faLock}/><input type='password'
                    placeholder='Confirm password'/> </span>

                <div className='buttons-div'>
                    <button type='submit' className='button-style'>Register</button>
                    <NavLink to={'/login'} className='a-css'>Login</NavLink>
                </div>

            </form>

        </div>

    )

}
