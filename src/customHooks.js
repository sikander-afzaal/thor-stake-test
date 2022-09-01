import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initWeb3 } from "./redux/web3/web3.actions";

export function callActionWithDelay(dispatch, action, delay = 2500) {
  if (dispatch && action)
    setTimeout(() => {
      dispatch(action());
    }, [delay]);
}

export const useInitWeb3 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initWeb3());
  }, [dispatch]);
};

export const textOverflow = (text, limit = 5) => {
  if (text && text.length > limit) {
    text =
      text.slice(0, limit) + "..." + text.slice(text.length - 4, text.length);
  }
  return text;
};
