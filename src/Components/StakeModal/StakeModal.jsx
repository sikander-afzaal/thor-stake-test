import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateAll, updateStake } from "../../redux/filterReducer";

import "./StakeModal.css";
import union from "../../Assets/Union.svg";
import tick from "../../Assets/tick.svg";
import loaderGif from "../../Assets/loader.gif";
import ReCAPTCHA from "react-google-recaptcha";
import cross from "../../Assets/cross.svg";

function StakeModal({ setCloseModal, name, id, staked, all, setAll }) {
  const dispatch = useDispatch();

  const [loader, setLoader] = useState(false);
  const [complete, setcomplete] = useState(false);
  const [btnText, setBtnText] = useState("");
  const [midText, setMidText] = useState("");
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  useEffect(() => {
    if (all.stake === false && all.unstake === false) {
      staked ? setBtnText("unstake") : setBtnText("stake");
    } else if (all.stake) {
      setBtnText("stake");
      setMidText("Stake All?");
    } else if (all.unstake) {
      setBtnText("unstake");
      setMidText("Unstake All?");
    }
  }, [all.stake, staked, all.unstake]);

  const loadHandler = () => {
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
      setcomplete(true);
      if (!all.stake && !all.unstake) {
        dispatch(updateStake({ name: name, id: id }));
      } else if (all.stake) {
        dispatch(updateAll(true));
      } else if (all.unstake) {
        dispatch(updateAll(false));
      }
    }, 2000);

    setTimeout(() => {
      setcomplete(false);
      closeModal();
    }, 4000);
  };

  const closeModal = () => {
    setCloseModal(false);
    setAll({ stake: false, unstake: false });
    setMidText("");
  };

  return (
    <>
      <div className="overlay-modal stake-ovelay" onClick={closeModal}></div>
      <div className="modal-rent">
        {loader ? (
          <div className="loader-div">
            <img src={union} alt="" className="union" />
            <h2 className="kanit">Please Wait</h2>
            <img src={loaderGif} alt="" className="loader" />
            <img src={union} alt="" className="union" />
          </div>
        ) : complete ? (
          <div className="complete-div">
            <img src={union} alt="" className="union" />
            <h2 className="kanit">Complete</h2>
            <img src={tick} alt="" className="loader" />
            <img src={union} alt="" className="union" />
          </div>
        ) : (
          <>
            <img onClick={closeModal} src={cross} alt="" className="cross" />
            {midText ? (
              <div className="modal-row center">
                <h3 className="kanit">{midText}</h3>
              </div>
            ) : (
              <div className="modal-row">
                <p className="kanit">{staked ? "Unstake" : "Stake"}</p>
                <h2 className="kanit">{name} #0001</h2>
              </div>
            )}
            <img src={union} alt="" className="union" />

            <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
            <button onClick={() => loadHandler()} className="rent long-rent">
              {btnText}
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default StakeModal;
