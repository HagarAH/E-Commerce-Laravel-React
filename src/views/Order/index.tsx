import './index.css';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axiosClient from '../../axios-client';
import {useStateContext} from '../../contexts/AuthProvider';
import ReactModal from 'react-modal';
import burger from '../../assets/images/burgerExp.png'
import AddToCart from "../../hooks/AddToCart";


export default function Order() {
    type Product = {
        id: number;
        name: string;
        price: number;
        description: string;
    };
    const [products, setProducts] = useState<Product[]>([]);
    const {token} = useStateContext();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const { cart, handleAddToCart } = AddToCart();
    const handleAddToCartClick = (id:number) => {
        if (!token) {
            setShowModal(true);
        } else {
            handleAddToCart(id);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const {data} = await axiosClient.get('/products');
            setProducts(data.products);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const navigateToLogin = () => {
        navigate('/login');
    };

    return (
        <>
            <div className='order-div'>
                <div>
                    <h1>Best burger in town</h1>
                </div>
                {products &&
                    products.map((product) => (
                        <div key={product.id} className='order-item'>
                            <div className='text-item'>
                                <h2>{product.name}</h2>
                                <p>{product.price} $</p>
                                <p>{product.description}</p>
                                <button
                                    className='text-decoration-none button-style'
                                    onClick={() => handleAddToCartClick(product.id)}
                                >
                                    Add to cart
                                </button>
                            </div>
                            <img src={burger} alt='Burger'/>
                        </div>
                    ))}
            </div>
            <ReactModal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    },
                    content: {
                        borderRadius: '50px',
                        border: '1px solid',
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        width: '50%',
                        height: '50%',
                        color: 'lightsteelblue',
                    },
                }}
            >
                <div className='modal-div'>
                    <p>You need to log in to add items to your cart. Do you want to log in now?</p>
                    <button className='button-style' onClick={navigateToLogin}>
                        Yes
                    </button>
                    <button className='button-style' onClick={() => setShowModal(false)}>
                        No
                    </button>
                </div>
            </ReactModal>
        </>
    );
}
