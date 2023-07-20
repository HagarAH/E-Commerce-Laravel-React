import { useState, useCallback } from "react";
import axiosClient from "../axios-client";

export default function useDeleteItemFromCart() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const deleteCartItem = useCallback(async (id: number) => {
        setLoading(true);
        try {
            await axiosClient.post("/deleteItem", { id });
            console.log("Cart item deleted successfully!");
        } catch (error) {
            setError(error as Error);
            console.error("Failed to send delete item:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    return { deleteCartItem, loading, error };
}
