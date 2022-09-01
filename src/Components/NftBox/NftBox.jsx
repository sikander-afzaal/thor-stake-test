import React from "react";
import "./NftBox.css";

function NftBox({ id, staked, name, img, setValues, setModal }) {
  return (
    <div className="nft-box">
      <div className="top-nft">
        <img src={img} alt="" />
        <p className="noto-sans">{name} #0001</p>
      </div>
      <div className="bottom-nft">
        <div className="specs-nft">
          <div className="spec-row">
            <h3 className="noto-sans">Rewards</h3>
          </div>
          <div className="spec-row">
            <p className="noto-sans">1352</p>
            <p className="noto-sans">$ASG</p>
          </div>
        </div>

        <button
          onClick={() => {
            setValues({
              staked: staked,
              id: id,
              name: name,
            });
            setModal(true);
          }}
          className={`kanit ${staked ? "grey-rent" : "rent"}`}
        >
          {staked ? "Unstake" : "Stake"}
        </button>
      </div>
    </div>
  );
}

export default NftBox;
