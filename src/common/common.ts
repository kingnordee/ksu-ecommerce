import React from "react";

export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

export interface IProduct {
    id: number
    name: string,
    imageUrl: string,
    price: number,
}

export enum StorageKeys {
    UserKey = "user",
    CartKey = "cart"
}

export const saveToLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value)
}

export const getFromLocalStorage = (key: string) => {
    return localStorage.getItem(key)
}

export const getUserSetState = (setState: React.Dispatch<React.SetStateAction<IUser | null>>) => {
    let user: IUser|null = null;
    const localStorageValue = getFromLocalStorage(StorageKeys.UserKey);
    if(localStorageValue !== null) user = JSON.parse(localStorageValue) as IUser;
    setState(user);
}

export const getCartIdList = () => {
    let cartList: number[]|null = null;
    const localStorageValue = getFromLocalStorage(StorageKeys.CartKey);
    if(localStorageValue !== null) cartList = JSON.parse(localStorageValue) as number[];
    return cartList;
}

// https://unsplash.com/s/photos/product

export const products: IProduct[] = [
    {id: 1, name: "Chanel Perfume", price: 85.30,
        imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 2, name: "Backpack", price: 66.00,
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 3, name: "Camera", price: 220.00,
        imageUrl: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 4, name: "Cleanser", price: 56.48,
        imageUrl: "https://images.unsplash.com/photo-1598460880248-71ec6d2d582b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 5, name: "Running Shoe", price: 55.35,
        imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 6, name: "Dragon Ball Kai Wallpaper", price: 30.98,
        imageUrl: "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 7, name: "Alex", price: 45.66,
        imageUrl: "https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 8, name: "Stool", price: 30.50,
        imageUrl: "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    {id: 9, name: "Guitar", price: 150.00,
        imageUrl: "https://images.unsplash.com/photo-1588449668365-d15e397f6787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExfHxwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {id: 10, name: "Xbox Controller", price: 35.50,
        imageUrl: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 11, name: "Keyboard", price: 87.99,
        imageUrl: "https://images.unsplash.com/photo-1625948515291-69613efd103f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE0fHxwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {id: 12, name: "Sunglasses", price: 80.99,
        imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
]
