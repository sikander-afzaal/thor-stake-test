import { createSlice } from "@reduxjs/toolkit";
import {
  connectWallet,
  disconnectWallet,
  getWalletBalance,
  resetWallet,
} from "./wallet.actions";

const initialState = {
  isWalletConnected: false,
  isWalletConnectingFailed: false,
  isWalletConnecting: false,
  walletAddress: null,
  message: "",

  walletBalance: null,
  walletBalanceLoading: false,
  walletBalanceLoadingFailed: false,
};
const walletSlicer = createSlice({
  name: "wallet",
  initialState: initialState,

  extraReducers: {
    [connectWallet.pending]: (state, action) => {
      state.isWalletConnecting = true;
      state.isWalletConnected = false;
      state.isWalletConnectingFailed = false;
    },
    [connectWallet.fulfilled]: (state, action) => {
      state.isWalletConnecting = false;
      state.isWalletConnected = true;
      state.walletAddress = action.payload.walletAddress;
      console.log(state.walletAddress);
    },
    [connectWallet.rejected]: (state, action) => {
      state.isWalletConnecting = false;
      state.isWalletConnectingFailed = true;
      state.isWalletConnected = false;
      state.walletAddress = null;
      state.message = action.error.message;
    },
    [disconnectWallet]: (state, action) => {
      state.isWalletConnected = false;
      state.walletAddress = null;
      localStorage.clear();
    },
    [resetWallet]: (state, action) => {
      state.isWalletConnected = false;
      state.walletAddress = null;
      state.isWalletConnectingFailed = false;
      state.message = "";
    },

    [getWalletBalance.pending]: (state, action) => {
      state.walletBalanceLoading = true;
      state.walletBalanceLoadingFailed = false;
    },
    [getWalletBalance.fulfilled]: (state, action) => {
      state.walletBalanceLoading = false;
      state.walletBalance = action.payload.balance;
    },
    [getWalletBalance.rejected]: (state, action) => {
      state.walletBalanceLoading = false;
      state.walletBalanceLoadingFailed = true;
    },
  },
});
export default walletSlicer.reducer;
