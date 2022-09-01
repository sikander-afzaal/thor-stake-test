import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  heim: true,
  freya: true,
  thor: true,
  odin: true,
  nft: {
    heimNft: [
      { id: "heim1", name: "Heimdall", staked: true },
      { id: "heim2", name: "Heimdall", staked: true },
      { id: "heim3", name: "Heimdall", staked: false },
      { id: "heim4", name: "Heimdall", staked: true },
      { id: "heim5", name: "Heimdall", staked: false },
      { id: "heim6", name: "Heimdall", staked: true },
    ],
    freyaNft: [
      { id: "freya1", name: "Freya", staked: true },
      { id: "freya2", name: "Freya", staked: true },
      { id: "freya3", name: "Freya", staked: false },
      { id: "freya4", name: "Freya", staked: true },
      { id: "freya5", name: "Freya", staked: false },
      { id: "freya6", name: "Freya", staked: true },
    ],
    thorNft: [
      { id: "thor1", name: "Thor", staked: true },
      { id: "thor2", name: "Thor", staked: true },
      { id: "thor3", name: "Thor", staked: false },
      { id: "thor4", name: "Thor", staked: true },
      { id: "thor5", name: "Thor", staked: false },
      { id: "thor6", name: "Thor", staked: true },
    ],
    odinNft: [
      { id: "odin1", name: "Odin", staked: true },
      { id: "odin2", name: "Odin", staked: true },
      { id: "odin3", name: "Odin", staked: false },
      { id: "odin4", name: "Odin", staked: true },
      { id: "odin5", name: "Odin", staked: false },
      { id: "odin6", name: "Odin", staked: true },
    ],
  },
};
const filterReducer = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      switch (action.payload) {
        case "heim":
          state.heim = !state.heim;
          break;
        case "freya":
          state.freya = !state.freya;
          break;
        case "thor":
          state.thor = !state.thor;
          break;
        case "odin":
          state.odin = !state.odin;
          break;

        default:
          return state;
      }
    },
    updateStake: (state, action) => {
      switch (action.payload.name) {
        case "Heimdall":
          state.nft.heimNft.map((elem) => {
            if (elem.id === action.payload.id) {
              return (elem.staked = !elem.staked);
            } else return elem;
          });
          break;
        case "Freya":
          state.nft.freyaNft.map((elem) => {
            if (elem.id === action.payload.id) {
              return (elem.staked = !elem.staked);
            } else return elem;
          });
          break;
        case "Thor":
          state.nft.thorNft.map((elem) => {
            if (elem.id === action.payload.id) {
              return (elem.staked = !elem.staked);
            } else return elem;
          });
          break;
        case "Odin":
          state.nft.odinNft.map((elem) => {
            if (elem.id === action.payload.id) {
              return (elem.staked = !elem.staked);
            } else return elem;
          });
          break;

        default:
          return state;
      }
    },
    updateAll: (state, action) => {
      const copy = { ...state.nft };
      if (action.payload === false) {
        for (let [key, value] of Object.entries(state.nft)) {
          copy[key] = value.map((elem) => {
            return { ...elem, staked: false };
          });
        }
      } else if (action.payload === true) {
        for (let [key, value] of Object.entries(state.nft)) {
          copy[key] = value.map((elem) => {
            return { ...elem, staked: true };
          });
        }
      }
      state.nft = copy;
    },
  },
});

export const { updateAll, updateFilter, updateStake } = filterReducer.actions;

export default filterReducer.reducer;
