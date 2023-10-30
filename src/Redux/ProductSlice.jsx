import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../Axios/AxiosInstance";

const initialState = {
  products: {},
  cart: [],
  status: "idle",
  totalRecords: 0,
};

export const FetchProducts = createAsyncThunk("product/listing", async () => {
  try {
    const response = await AxiosInstance.get("products");
    // console.log(response.data);
    return response?.data;
  } catch (e) {
    return e?.response?.data;
  }
});

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [FetchProducts.pending]: (state) => {
      state.status = "loading";
      //   state.products = null;
    },
    [FetchProducts.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.products = payload;
      state.totalRecords = payload.length;
    },
    [FetchProducts.rejected]: (state, action) => {
      state.status = "failed";
      //   state.products = null;
    },
  },
});

export const { AddToCart } = ProductSlice.actions;
