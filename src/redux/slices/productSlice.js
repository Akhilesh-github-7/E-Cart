import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// action return promise
export const fetchprodcts = createAsyncThunk("products/fetchproducts",async ()=>{
    const result = await axios.get("https://dummyjson.com/products")
    console.log(result);
    return result.data.products
    
})

createSlice({
    name:'products',
    initialState:{
        allproducts:[],
        loading:false,
        errorMsg:""
    },
    reducers:{
        
    },
    extraReducers:((builder)=>{
        builder.addCase(fetchprodcts.fulfilled,(state,apiResult)=>{
            state.allproducts = apiResult.payload
            state.loading = false
            state.errorMsg = ""
        })
        builder.addCase(fetchprodcts.fulfilled,(state,apiResult)=>{
            state.allproducts =[]
            state.loading = true
            state.errorMsg = ""
        })
        builder.addCase(fetchprodcts.fulfilled,(state,apiResult)=>{
            state.allproducts = []
            state.loading = false
            state.errorMsg = "API call failed"
        })
    })
})