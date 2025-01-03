// src/features/api/baseApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from "js-cookie"
export const baseApi = createApi({
    reducerPath: 'baseApi', // The key for this API in the Redux store
    baseQuery: fetchBaseQuery({
        // baseUrl: 'http://192.168.11.219:7000/api/v1', // Replace with your API's base URL
        baseUrl: 'https://buddy-bodega.vercel.app/api/v1', // Replace with your API's base URL
        // credentials : "include",
        prepareHeaders: (headers) => {
            const token = Cookies?.get("token") // Assuming token is stored in the auth slice
            if (token) {
                headers.set('Authorization', `${token}`);
                return
            }
            // return headers;
        },
    }),
    endpoints: () => ({}),
    tagTypes: ["approveEvent", "allEvents", "logIn", "transaction", "allUsers", "allCreators", "complains", "updateSubscription", "cart"]
});

// Export hooks for usage in functional components
export default baseApi; 
