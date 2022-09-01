import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { callActionWithDelay } from "../../customHooks";

export const connectWallet = createAsyncThunk(
  "Wallet/ConnectWallet",
  async (_, { dispatch, getState }) => {
    try {
      const {
        Web3Instance: { web3 },
      } = getState();
      const addresses = await web3.eth.requestAccounts();
      let address = addresses[0];
      await web3.eth.personal.sign(
        web3.utils.fromUtf8(
          "Please sign this message to connect to Thor Stack."
        ),
        address
      );
      dispatch(getWalletBalance({ web3, walletAddress: address }));

      return { walletAddress: address };
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      callActionWithDelay(dispatch, resetWallet, 6000);
      console.log(message);
      throw new Error(message);
    }
  }
);

export const getWalletBalance = createAsyncThunk(
  "Wallet/getWalletBalance",
  async ({ web3, walletAddress }) => {
    try {
      const balance = await web3.eth.getBalance(walletAddress);
      const balanceInEth = web3.utils.fromWei(balance, "ether");
      return {
        balance: balanceInEth,
      };
    } catch (error) {
      console.log("error in wallet/getWalletBalance", error);
      throw error;
    }
  }
);
export const disconnectWallet = createAction("Wallet/DisconnectWallet");
export const resetWallet = createAction("Wallet/ResetWallet");
