import './index.css'
import burger from '../../assets/images/burger.png'
import {NavLink} from "react-router-dom";
export default function Order(){
        return (
        <>
            <div className=' order-div'>
                <div>
                    <h1>Best burger in town</h1>
                </div>

                <div className='order-item'>
                    <div className='text-item'>
                        <h2>Best burger in town</h2>
                        <p>Welcome to Burger Bliss, where we take your cravings to a whole new level!
                            Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.</p>
                        <NavLink className='text-decoration-none button-style' to='/checkout'> Add to cart</NavLink>
                    </div>
                    <img src={burger}/>
                </div>
                <div className='order-item'>
                    <div className='text-item'>
                        <h2>Best burger in town</h2>
                        <p>Welcome to Burger Bliss, where we take your cravings to a whole new level!
                            Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.</p>
                        <NavLink className='text-decoration-none button-style' to='/checkout'> Add to cart</NavLink>
                    </div>
                    <img src={burger}/>
                </div>
                <div className='order-item'>
                    <div className='text-item'>
                        <h2>Best burger in town</h2>
                        <p>Welcome to Burger Bliss, where we take your cravings to a whole new level!
                            Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.</p>
                        <NavLink className='text-decoration-none button-style' to='/checkout'> Add to cart</NavLink>
                    </div>
                    <img src={burger}/>
                </div>
            </div>

        </>
)

}
