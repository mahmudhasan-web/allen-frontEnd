import baseApi from "./baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUserOrders: build.query({
            query: () => ({
                url: "/order/get-orders-by-customer",
                method: 'GET'
            })
        })
    })
})

export const {useGetUserOrdersQuery} = orderApi