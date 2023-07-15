import './index.css'
import burger from '../../assets/images/burger.png'
import {Navigate, NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../axios-client";
import {useStateContext} from "../../contexts/AuthProvider";
import ReactModal from 'react-modal';
export default function Order() {
    const [products, setProducts] = useState([]);
    const {setToken, token} = useStateContext();
    const [showModal, setShowModal] = useState(false);
    const handleAddToCart = () => {
        if (!token) {
            setShowModal(true);
        } else {
            // need to think about this integration first
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        try {
            const {data} = await axiosClient.get('/products');
            setProducts(data.products);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className=' order-div'>
                <div>
                    <h1>Best burger in town</h1>
                </div>
                {products && products.map((product,index) =>
                    <div key={product.id} className='order-item'>
                        <div className='text-item'>
                            <h2>{product.name}</h2>
                            <p>{product.price} $</p>
                            <p>{product.description}</p>
                            <button className='text-decoration-none button-style' onClick={handleAddToCart}> Add to cart</button>
                        </div>
                        <img src={burger}/>
                    </div>
                )}
            </div>
            <ReactModal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)'
                    },
                    content: {
                        borderRadius:'50px',
                        border:'1px solid',
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        width: '50%',
                        height: '50%',
                        color: 'lightsteelblue'
                    }
                }}
            >
                <div className='modal-div'>
                    <p>You need to log in to add items to your cart. Do you want to log in now?</p>
                    <button className='button-style' onClick={() => { <Navigate to='/login'/> }}>Yes</button>
                    <button className='button-style'  onClick={() => setShowModal(false)}>No</button>
                </div>

            </ReactModal>
        </>
    )
}
