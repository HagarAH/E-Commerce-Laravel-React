import { useEffect, useState } from "react";
import AddToCart from "./AddToCart";
import axiosClient from "../axios-client";

export default function GetCartItems() {
    type Product = {
        id: number;
        name: string;
        price: number;
        description: string;
        amount: number;
    };

    const { cart } = AddToCart();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axiosClient.get("/getItems");
                console.log('Data received from server:', data);
                setProducts(data.products);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, [cart]);

    return products;
}
