import { useState, useCallback } from "react";
import axiosClient from "../axios-client";
import {Product} from "./useGetCartItems";

export default function useDeleteItemFromCart(products: Product[], setProducts: React.Dispatch<React.SetStateAction<Product[]>>) {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const deleteCartItem = useCallback(async (id: number) => {
        setLoading(true);
        try {
            const updatedCart = products.filter((item: Product) => item.id !== id);
            setProducts(updatedCart);

            await axiosClient.post("/deleteItem", { id });
            console.log("Cart item deleted successfully!");
        } catch (error) {
            setProducts(products);

            setError(error as Error);
            console.error("Failed to delete item:", error);
        } finally {
            setLoading(false);
        }
    }, [products, setProducts]);

    return { deleteCartItem, loading, error };
}
