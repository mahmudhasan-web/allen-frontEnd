import baseApi from "./baseApi";

const paymentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        cardPayment: build.mutation({
            query: (paymentInfo) => {
                return {
                    url: `/stripe/create-payment`,
                    method: "POST",
                    body: paymentInfo
                }
            },
            invalidatesTags: ["cart"]
        }),
        cashPayment: build.mutation({
            query: (paymentInfo) => {
                return {
                    url: `/cashIn/cashIn-payment`,
                    method: "POST",
                    body: paymentInfo
                }
            }
        }),
        successPayment: build.query({
            query: () => ({
                url: `/stripe/success-payment`,
                method: "GET",
            })
        })
    })
})

export const { useCardPaymentMutation, useCashPaymentMutation, useSuccessPaymentQuery } = paymentApi;