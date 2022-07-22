import React, {useState} from "react";

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
    quantity: number
}

export interface ICart {
    items: IProduct[]
}

export const saveToLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value)
}
export const getFromLocalStorage = (key: string) => {
    return localStorage.getItem(key)
}

export const getUserSetState = (setState: React.Dispatch<React.SetStateAction<IUser | null>>) => {
    let user: IUser|null = null;
    const localStorageValue = getFromLocalStorage("user");
    if(localStorageValue !== null) user = JSON.parse(localStorageValue) as IUser;
    setState(user);
}


