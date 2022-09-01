import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/logo.svg";
import Web3 from "web3/dist/web3.min.js";
function Header() {
  const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;

const connect2 = async () => {
   let providerOptions = {
      walletconnect: {
       package: WalletConnectProvider,
        options: {
          // infuraId: "b50bee145172497d9576a6f79b1209aa",
        infuraId: 'JuKirzHWDP97kprdQEkmzv0X7J8mz64emhs4Os70',
        chainId: 56,
         rpc: {
            // 1: "https://mainnet.infura.io/v3/b50bee145172497d9576a6f79b1209aa",
            56: "https://bsc-dataseed.binance.org",
          },
        }
      },
   };

  let web3modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: false,
    providerOptions,
    theme:"dark"

  });
  console.log('function called')
  let provider = await web3modal.connect()
  let web3 = new Web3(provider)
  let acc = web3.eth.getAccounts()
  acc.then((result) => {
    if (result[0] != null) {
      let nim = result[0].split("");
      let account = nim[0] + nim[1] + nim[2] + nim[3] + "..." + nim[37] + nim[38] + nim[39] + nim[40] + nim[41]
      let address=document.getElementById('address')
      if (address) {
        address.innerText=account
      }
    }
  })
}
  const [connect] = useState(false);
  return (
    <div className="header">
      <img src={logo} className="logo" alt="" />
      <div className="header-right">
        <div className="price-thor">
          <p className="kanit">
            0 <span className="trajan">ASG</span>
          </p>
          <div className="rule"></div>
          <p className="kanit">
            0 <span className="trajan">THOR</span>
          </p>
        </div>
        {connect ? (
          <p className="address segoe">0x1051…AgD2</p>
        ) : (
          <p
            style={{ cursor: "pointer", fontWeight: "600" }}
            onClick={connect2}
            className="address segoe"
            id="address"
          >
            Connect
          </p>
        )}
      </div>
    </div>
  );
}

export default Header;
