import { combineReducers } from "@reduxjs/toolkit";
import filterReducer from "./filterReducer";
import WalletReducer from "./wallet/wallet.slicer";
import Web3Reducer from "./web3/web3.slicer";

const rootReducer = combineReducers({
  filter: filterReducer,
  Wallet: WalletReducer,
  Web3Instance: Web3Reducer,
});

export default rootReducer;
