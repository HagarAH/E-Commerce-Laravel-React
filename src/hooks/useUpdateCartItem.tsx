import {useCallback, useState} from "react";
import {Product} from "./useGetCartItems";
import axiosClient from "../axios-client";

export default function useUpdateCartItem(products: Product[], setProducts: React.Dispatch<React.SetStateAction<Product[]>>) {

    const [error, setError] = useState<Error | null>(null);

    const updateCartItem = useCallback(async (id: number, newAmount:number) => {
        try {
            const updatedCart: Product[] = products.map(product =>
                product.id === id ? { ...product, amount: newAmount } : product
            );
            setProducts(updatedCart);

            await axiosClient.patch("/updateItem", { id: id, amount: newAmount });
            console.log("Cart item updated successfully!");
        } catch (error) {
            setProducts(products);

            setError(error as Error);
            console.error("Failed to update item:", error);
        } finally {
        }
    }, [products, setProducts]);
    return {updateCartItem,error};

}
