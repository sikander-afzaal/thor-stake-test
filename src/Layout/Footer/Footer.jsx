import React from "react";
import "./Footer.css";
import logo from "../../Assets/foot-logo.png";
import discord from "../../Assets/discord-grey.svg";
import twitter from "../../Assets/twitter-grey.svg";
import circles from "../../Assets/circles-grey.svg";
function Footer() {
  return (
    <div className="footer">
      <div className="logo-div">
        <img src={logo} alt="" />
      </div>
      <h1 className="trajan">Join The Community</h1>
      <div className="social-div">
        <a target={"blank"} href="https://discord.gg/thorfinancial">
          <img src={discord} alt="..." />
        </a>
        <a target={"blank"} href="https://twitter.com/GodsofAsgardP2E">
          <img src={twitter} alt="..." />
        </a>
        <a target={"blank"} href="https://thornodes.medium.com/">
          <img src={circles} alt="..." />
        </a>
      </div>
      <h2 className="noto-sans">©Gods of Asgard . All rights reserved.</h2>
    </div>
  );
}

export default Footer;
