import { useEffect, useState } from "react"
import type { Product } from "../components/interfaces/product"
import { CartContext } from "./CartContext"

interface CartProviderProps {
    children: React.ReactNode
}

export interface ProductCart extends Product {
    quantity: number
}

const localStorageKey = "@SyntaxWear:cart"

export const CartProvider = ({ children }: CartProviderProps) => {

    const [cart, setCart] = useState<ProductCart[]>(() => {
        const cartFromLocalStorage = localStorage.getItem(localStorageKey);

        const parsedCart = 
            cartFromLocalStorage !== null ? JSON.parse(cartFromLocalStorage) : [];
        
        return parsedCart
    });

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(cart))
    },[cart]);

    function add(product: Product): void {
        const productExisInCart = cart.find(
            itemInCart => itemInCart.id === product.id
        );

        let newCart;
        if (productExisInCart) {
            newCart = cart.map(itemInCart =>
                itemInCart.id === product.id ?
                    { ...itemInCart, quantity: itemInCart.quantity + 1 }
                    : itemInCart
            )
        } else {
            newCart = [...cart, { ...product, quantity: 1 }]
        }

        setCart(newCart)
    }

    function remove(productId: number): void {
        setCart(cart.filter((itemInCart) => itemInCart.id !== productId));
    }

    function increment(product: ProductCart): void {
        updateProductQuantity(product, product.quantity + 1);
    }

    function decrement(product: ProductCart): void {
        updateProductQuantity(product, product.quantity - 1);
    }

    function updateProductQuantity(product: ProductCart, newQuantity: number): void {
        if (newQuantity <= 0) return
        const productExisInCart = cart.find(
            itemInCart => itemInCart.id === product.id
        );

        if (!productExisInCart) return;

        const newCart = cart.map((itemInCart) =>
            itemInCart.id === product.id
                ? { ...itemInCart, quantity: newQuantity }
                : itemInCart
        );

        setCart(newCart);
    }

return <CartContext.Provider value={{
    cart,
    add,
    remove,
    increment,
    decrement

}}>{children}</CartContext.Provider>
}

// add product
//remove product
//plus product
// minus propuct