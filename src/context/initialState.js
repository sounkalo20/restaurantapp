import { fetchCart, fetchUser } from "../utils/fetchLocalStorageDate"

const userInfo = fetchUser()
const cartInfo = fetchCart()

export const initalState = {
    user: userInfo,
    foodItems : null,
    cartShow : false,
    cartItems: cartInfo
}