import './index.css';
import burger from '../../assets/images/burger.png'
import trusted from '../../assets/images/Auto Layout Horizontal.png'
import {NavLink} from "react-router-dom";
export default function Hero(){
        return (
        <>

                <div className=" hero-div">
                    <div className="d-flex hero-top">
                        <div className="hero-text">
                            <h5 style={{
                                color:'#486284'
                            }}> Label goes here</h5>
                            <h1 style={{
                                color:'#486284'
                            }}> Best burger in town</h1>
                            <p className='text-wrap'>
                                Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.
                            </p>
                            <div className='d-flex' style={{ gap:'24px'}}>
                                <NavLink className="button-style my-2 d-flex justify-content-center" style={{ background: '#486284', color: "white" }} to='/signup'>
                                    Order Now
                                </NavLink>
                                <NavLink className="button-style my-2 d-flex justify-content-center"  to='/login'>
                                    Explore
                                </NavLink>
                            </div>
                            <div>
                                <p>Trusted by</p>
                                <img src={trusted}/>
                            </div>
                        </div>
                        <div>
                            <img  src={burger}/>
                        </div>

                    </div>


                </div>





        </>
)

}
