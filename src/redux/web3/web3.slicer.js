import { createSlice } from "@reduxjs/toolkit";
import { getNetworkDetails, initWeb3 } from "./web3.actions";

const initialState = {
  isWeb3Init: false,
  isWeb3initilizing: false,
  isWeb3initFailed: false,
  web3: null,
  message: null,
  networkId: null,
  networkName: null,
};

const web3Slicer = createSlice({
  name: "Web3",
  initialState: initialState,
  extraReducers: {
    [initWeb3.pending]: (state, action) => {
      state.isWeb3Init = false;
      state.isWeb3initFailed = false;
      state.isWeb3initilizing = true;
    },
    [initWeb3.fulfilled]: (state, action) => {
      state.isWeb3Init = true;
      state.isWeb3initilizing = false;
      state.web3 = action.payload.web3;
      state.networkName = action.payload.networkName;
      state.networkId = action.payload.networkId;
    },
    [getNetworkDetails.fulfilled]: (state, action) => {
      state.networkName = action.payload.networkName;
      state.networkId = action.payload.networkId;
    },
    [getNetworkDetails.rejected]: (state, action) => {
      state.networkName = null;
      state.networkId = null;
    },

    [initWeb3.rejected]: (state, action) => {
      state.isWeb3Init = false;
      state.isWeb3initilizing = false;
      state.isWeb3initFailed = true;
      state.networkName = null;
      state.networkId = null;
    },
  },
});

export default web3Slicer.reducer;
