import './index.css'
import burgers from '../../assets/images/burgerExp.png';
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Navigate} from "react-router-dom";
import {useStateContext} from "../../contexts/AuthProvider";
import getCartItems from "../../hooks/useGetCartItems";
import useDeleteItemFromCart from "../../hooks/useDeleteItemFromCart";
import useUpdateCartItem from "../../hooks/useUpdateCartItem";
import {useEffect} from "react";

export default function Cart() {
    type Product = {
        id: number;
        name: string;
        price: number;
        description: string;
        amount: number;
    };

    const {token} = useStateContext();
    const {products, setProducts} = getCartItems();
    const {deleteCartItem} = useDeleteItemFromCart(products, setProducts);
    const {updateCartItem} = useUpdateCartItem(products, setProducts);
    if (!token) {
        return <Navigate to="/*"/>
    }

    const handleDeleteItem = (id: number) => {
        deleteCartItem(id);
    };
    const changeHandler = (id: number, amount: number) => {
        updateCartItem(id, amount);
    };
    var total = 0;
    useEffect(() => {
        console.log(products);
    }, [products]);
    return (
        <>
            <div>
                <div className='h1-text'>
                    <h1> My cart</h1>
                </div>
                <div className='inner-div'>
                    <div className='orders-display'>
                        {products && [...products].sort((a, b) => a.id - b.id).map((product: Product, index) => {
                            const productTotal = product.price * product.amount;
                            total += productTotal;
                            return (
                                <div key={index} className='cart-item'>
                                    <img className='img-cart' src={burgers}/>
                                    <div className='text-cart'>
                                        <h2 className={'h2-text'}> {product.name}</h2>
                                        <p className='p-cart'> {product.description}</p>
                                        <div className='amount-div'>
                    <span className=' p-2 '>Amount: <input type='number' value={product.amount}
                                                           onChange={(e) => changeHandler(product.id, parseInt(e.target.value))}
                                                           className='input-amount'/></span>

                                            <FontAwesomeIcon
                                                style={{paddingLeft: '8px'}}
                                                color={'red'}
                                                icon={faTrashCan}
                                                onClick={() => handleDeleteItem(product.id)}
                                            />
                                            <br/>
                                            <span className=' p-2 '> {productTotal} $</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
                <div className='order-deets'>
                    <div className="details-container">
                        <span>Order details</span>
                        <p>Total: {total} $</p>
                    </div>
                    <div className="button-container">
                        <button className={'button-style p-1'}>Checkout</button>
                    </div>
                </div>


            </div>
        </>
    )
}
