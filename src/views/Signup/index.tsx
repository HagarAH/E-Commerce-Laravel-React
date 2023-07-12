import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import axiosClient from '../../axios-client';
import './index.css';
import 'animate.css';

// move password validation function outside of component
const passwordValidation = (password) => {
    if (!/(?=.*[a-z])/.test(password)) {
        return "Password must contain at least one lowercase character";
    }
    if (!/(?=.*[A-Z])/.test(password)) {
        return "Password must contain at least one uppercase character";
    }
    if (!/(?=.*\d)/.test(password)) {
        return "Password must contain at least one number";
    }
    if (!/.{8,}/.test(password)) {
        return "Password must be at least eight characters long";
    }
    return null;
};

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [err, setError] = useState('');

    const onSubmit = (ev) => {
        ev.preventDefault();
        if (!email) {
            setError("Email is required");
            return;
        }
        const validationError = passwordValidation(password);
        if (validationError) {
            setError(validationError);
            return;
        }
        if (password !== passwordConfirm) {
            setError("Passwords do not match");
            return;
        }
        const payload = {
            email,
            password,
            password_confirm: passwordConfirm,
        };
        axiosClient.post('/signup', payload).then(response => ({}))
            .catch(error => {
                if(error.response)
        {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            setError(error.response.data.message);
        }
    else
        if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in Node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);

    });
        setError(null);
    };

    return (
        <div className='signup-div animate__animated animate__fadeInDown'>
            <h1 className='h1-txt animate__animated animate__swing animate__delay-1s'>Register</h1>
            {err && <p style={{color: 'red'}}>{err}</p>}
            <form onSubmit={onSubmit}>
                <label>Email</label>
                <span>
                    <FontAwesomeIcon color={'#486284'} icon={faUser}/>
                    <input type='email' placeholder='Enter your email' value={email} onChange={(e) => {
                        setEmail(e.target.value);
                        setError('')
                    }}/>
                </span>
                <label>Password</label>
                <span>
                    <FontAwesomeIcon color={'#486284'} icon={faLock}/>
                    <input type='password' placeholder='Enter your password' value={password} onChange={(e) => {
                        setPassword(e.target.value);
                        setError('')
                    }}/>
                </span>
                <label>Confirm password</label>
                <span>
                    <FontAwesomeIcon color={'#486284'} icon={faLock}/>
                    <input type='password' placeholder='Confirm password' value={passwordConfirm} onChange={(e) => {
                        setPasswordConfirm(e.target.value);
                        setError('')
                    }}/>
                </span>

                <div className='buttons-div'>
                    <button type='submit' className='button-style color-fill'>Register</button>
                    <NavLink to={'/login'} className='a-css'>Login</NavLink>
                </div>
            </form>
        </div>
    );
}
