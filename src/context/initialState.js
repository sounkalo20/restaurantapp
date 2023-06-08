import { fetchUser } from "../utils/fetchLocalStorageDate"

const userInfo = fetchUser()

export const initalState = {
    user: userInfo,
    foodItems : null
}