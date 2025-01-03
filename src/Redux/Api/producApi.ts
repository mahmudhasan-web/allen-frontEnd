import baseApi from "./baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints : (build) => ({
        getProduct :  build.query({
            query : ({newProduct,sale,category})=> ({
                url : `/product/get-all-products?category=${category}&sale=${sale}&newProduct=${newProduct}`,
                method : 'GET',
            })
        }),
        getSingleProduct : build.query({
            query : (id)=> ({
                url : `/product/single-product/${id}`,
                method : 'GET',
            })
        }),
    })
})


export const {useGetProductQuery, useGetSingleProductQuery} = productApi