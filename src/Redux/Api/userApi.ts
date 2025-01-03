import baseApi from "./baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        loginUser: build.mutation({
            query: (data) => {
                return {
                    url: "/auth/login",
                    method: "POST",
                    body: data
                }
            },
            invalidatesTags: ["logIn"]
        }),
        userDetails : build.query ({
            query : ()=>({
                url : "/customer/get-me",
                method : "GET"
            })
        }),
        registerUser : build.mutation({
            query : (data)=> {
                return {
                    url : "/customer/signUp",
                    method : "POST",
                    body : data
                }
            }
        }),
        verifyOTP : build.mutation({
            query : (data)=>{
                return {
                    url : "/customer/verify-otp",
                    method : "POST",
                    body : data
                }
            }
        }),
        updatePreferInterest : build.mutation({
            query : (data)=> {
                return {
                    url : "/customer/update-profile",
                    method : "PATCH",
                    body : data
                }
            }
        })
    }),
})


export const { useLoginUserMutation, useUserDetailsQuery, useRegisterUserMutation, useVerifyOTPMutation, useUpdatePreferInterestMutation } = userApi