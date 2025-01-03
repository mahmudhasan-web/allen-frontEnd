import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
// Define a type for the slice state
interface CounterState {
    name: string,
    image: string,
    registerInfo: {
        firstName: string, lastName: string, nickName: string, phone: string, email: string, password: string, address: string, city: string, state: string, zipCode: string, socialMediaType: string, socialMediaName: string, referralPhone?: string, idImage: File | null, idWithSelfie: File | null
    },
    checkOutOrder: {
        id: string
        data: {
            name: string
            productId: string
            price: number
            quantity: number
            total: number
            image : string
        }[]
    }
}

// Define the initial state using that type
const initialState: CounterState = {
    name: "",
    image: "",
    registerInfo: {
        firstName: "",
        lastName: "",
        nickName: "",
        phone: "",
        email: "",
        password: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        socialMediaType: "",
        socialMediaName: "",
        referralPhone: "",
        idImage: null,
        idWithSelfie: null
    },
    checkOutOrder: {
        id: "",
        data: [{
            name: "",
            productId: "",
            price: 0,
            quantity: 0,
            total: 0,
            image : ""
        }]
    }
}

export const adminAuth = createSlice({
    name: 'Auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name
            state.image = action.payload.image
        },
        logOut: (state) => {
            Cookies.remove("token")
            state.name = ""
            state.image = ""

        },
        userRegister: (state, action) => {
            state.registerInfo = action.payload
        },
        checkOutOrder: (state, action) => {
            state.checkOutOrder.id = action.payload.id
            state.checkOutOrder.data = action.payload.checkoutData
        }
    },
})

export const { setUser, logOut, userRegister, checkOutOrder } = adminAuth.actions

// Other code such as selectors can use the imported `RootState` type

export default adminAuth.reducer