import './index.css'
import burgers from '../../assets/images/burgerExp.png';
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Cart() {
    return (
        <>
            <div className='cart-div'>
                <div className='h1-text'>
                    <h1> My cart</h1>
                </div>
                <div className='inner-div'>
                    <div className='orders-display'>
                        <div className='order-item'>
                            <img src={burgers}/>
                            <div className='text-cart'>
                                <h2> Burger 1</h2>
                                <p className='p-cart'> Welcome to Burger Bliss, where we take your cravings to a whole new level!
                                    Our mouthwatering burgers are made from 100% beef and are served on freshly baked
                                    buns.</p>
                                <div className='amount-div'>
                                    <span className=' p-2 '>Amount:</span> <input type="number" min="0" max="10" step="1" value="0"/> <FontAwesomeIcon style={{
                                        paddingLeft:'8px'
                                }} color={'red'} icon={faTrashCan}/>
                                </div>

                            </div>
                        </div>

                        <div className='order-item'>
                            <img src={burgers}/>
                            <div className='text-cart'>
                                <h2> Burger 1</h2>
                                <p className='p-cart'> Welcome to Burger Bliss, where we take your cravings to a whole new level!
                                    Our mouthwatering burgers are made from 100% beef and are served on freshly baked
                                    buns.</p>
                                <div className='amount-div'>
                                    <span className=' p-2 '>Amount:</span> <input type="number" min="0" max="10" step="1" value="0"/> <FontAwesomeIcon style={{
                                        paddingLeft:'8px'
                                }} color={'red'} icon={faTrashCan}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='order-deets'>
                <span>Order details</span>
            </div>
        </>
    )

}
