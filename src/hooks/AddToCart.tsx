import { useEffect, useState } from "react";
import axiosClient from "../axios-client";

type CartItem = {
    id: number;
    count: number;
};

export default function AddToCart() {
    const [cart, setCart] = useState<CartItem[]>([]);

    const handleAddToCart = (id: number) => {
        const existingProduct = cart.find((item) => item.id === id);

        if (existingProduct) {
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === id ? { ...item, count: item.count + 1 } : item // increasing the count herer will bite me in the ass later must change it
                )
            );
        } else {
            setCart((prevCart) => [...prevCart, { id, count: 1 }]);
        }
    };

    useEffect(() => {
        const sendCartItems = async () => {
            try {
                await axiosClient.post("/addItem", { cart });
                console.log("Cart items sent successfully!");
            } catch (error) {
                console.error("Failed to send cart items:", error);
            }
        };

        if (cart.length > 0) {
            sendCartItems();
        }
    }, [cart]);


    return { cart, handleAddToCart };
}
