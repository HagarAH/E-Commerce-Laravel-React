import './index.css'
import burgers from '../../assets/images/burgerExp.png';
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Navigate} from "react-router-dom";
import {useStateContext} from "../../contexts/AuthProvider";
import getCartItems from "../../hooks/GetCartItems";
export default function Cart() {
    type Product = {
        id: number;
        name: string;
        price: number;
        description: string;
        amount: number;
    };

    const { token } = useStateContext();
    const products = getCartItems();

    if (!token) {
        return <Navigate to="/*"/>
    }

    return (
        <>
            <div className='cart-div'>
                <div className='h1-text'>
                    <h1> My cart</h1>
                </div>
                <div className='inner-div'>
                    <div className='orders-display'>
                        {products && products.map((product: Product) => (
                            <div className='order-item'>
                                <img src={burgers}/>
                                <div className='text-cart'>
                                    <h2> {product.name}</h2>
                                    <p className='p-cart'> {product.description}</p>
                                    <div className='amount-div'>
                                        <span className=' p-2 '>Amount: {product.amount}</span>
                                        <FontAwesomeIcon
                                            style={{
                                                paddingLeft: '8px'
                                            }} color={'red'} icon={faTrashCan}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='order-deets'>
                <span>Order details</span>
            </div>
        </>
    )
}
