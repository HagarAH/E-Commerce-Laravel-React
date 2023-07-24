import './index.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import 'animate.css';
import axiosClient from '../../axios-client';
import {useStateContext} from "../../contexts/AuthProvider.tsx";
import {useState} from "react";
import {usePaymentStateContext} from "../../contexts/PaymentProvider";


export default function Login() {
    const [err, setError] = useState('');
    const { setUser, setToken} = useStateContext();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {  setOAuthCode,oauthCode, setOAuthToken}= usePaymentStateContext()

    const onSubmit = (ev) => {
        ev.preventDefault();
        if (!email) {
            setError("Email is required");
            return;
        }

        const payload = {
            email,
            password,
        };
        console.log(payload);
        axiosClient.post('/login', payload).then(({data}) => {
            setUser(data.user);
            setToken(data.token);
            setOAuthCode(data.request);
            console.log(data);

            axiosClient.post('/getToken', { code: oauthCode })
                .then(({data}) => {
                    setOAuthToken(data.token);
                })
                .catch(error => {
                    console.log(error);
                });
        });
        setError('');
    };


    return (
        <div className='login-div animate__animated animate__fadeInDown'>
            <h1 className='h1-txt animate__animated animate__swing animate__delay-1s'>Login</h1>
            <form onSubmit={onSubmit}>
                <label>Email</label>
                <span>  <FontAwesomeIcon color={'#486284'} icon={faUser}/>
                    <input type='email' placeholder='Enter your email' value={email} onChange={(e) => {
                        setEmail(e.target.value);
                        setError('')
                    }}/> </span>
                <label>Password</label>
                <span>  <FontAwesomeIcon color={'#486284'} icon={faLock}/>
                    <input type='password' placeholder='Enter your password' value={password} onChange={(e) => {
                        setPassword(e.target.value);
                        setError('')
                    }}/> </span>
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
