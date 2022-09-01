import { createAsyncThunk } from "@reduxjs/toolkit";
import Web3 from "web3";

export const initWeb3 = createAsyncThunk("web3/initWeb3", async () => {
  try {
    const PROVIDER = Web3.givenProvider || window.ethereum || window.web3;
    if (PROVIDER) {
      const web3 = new Web3(PROVIDER);
      const networkName = await web3.eth.net.getNetworkType();
      const networkId = await web3.eth.net.getId();

      return {
        web3,
        networkName,
        networkId,
      };
    } else {
      throw new Error("No Provider Found.");
    }
  } catch (err) {
    throw err;
  }
});

export const getNetworkDetails = createAsyncThunk(
  "web3/getNetworkDetails",
  async (_, { getState }) => {
    const {
      Web3Instance: { web3 },
    } = getState();
    const networkName = await web3.eth.net.getNetworkType();
    const networkId = await web3.eth.net.getId();

    return { networkName, networkId };
  }
);
