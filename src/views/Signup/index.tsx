import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import axiosClient from '../../axios-client';
import './index.css';
import 'animate.css';
import {useStateContext} from "../../contexts/AuthProvider.tsx";

const passwordValidation = (password:string) => {
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
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [err, setError] = useState('');
    const { user, setUser, token, setToken } = useStateContext();


    // @ts-ignore
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
        console.log(payload);
        axiosClient.post('/signup', payload).then(({data}) => {

            setUser(data.user);
            setToken(data.token);
            console.log(data.token);

        })
            .catch(error => {
                if(error.response && error.response.status===422){
                    setError(error.response.data.message);
                    console.log(error)
        }
    else
        if (error.request) {
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }

    });
        setError('');
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
