import { useEffect, useState } from "react";
import UseAddToCart from "./useAddToCart";
import axiosClient from "../axios-client";

export type  Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    amount: number;
};
export default function UseGetCartItems() {


    const { cart } = UseAddToCart();
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

    return {products,setProducts};
}
