/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useEffect } from "react";
import SmallLogo from "../../assets/images/logo/logo.png";
import { Link, Outlet } from "react-router-dom";
import { initContracts } from "../../Utils/init";
import { Web3Context } from "../../context/Web3Context";

const HeaderSec = () => {
  const [isWrongNetwork, setIsWrongNetwork] = useState(false);
  const web3 = useContext(Web3Context);
  const handleConnectMetamask = () => {
    if (isMetamaskInstalled()) {
      if(window.ethereum.chainId != window.correctChainId){
        changeNetwork();
      }
      initContracts(fetchBalance);
    } else {
    }
  };
  const changeNetwork = async () => {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0xa86a" }], //AVAX: '0xa86a', Kovan 0x2A
    });
  };
  const isMetamaskInstalled = () => {
    return typeof window.ethereum !== "undefined";
  };
  const fetchBalance = async () => {
    
    const userData = {
      address: window.userAddress,
    };
    web3.dispatch(userData);
  };
  useEffect(() => {
    if (window.userAddress) {
      fetchBalance();
    }
    if (
      window.userAddress &&
      Number(window.chainId) !== Number(window.correctChainId)
    ) {
      setIsWrongNetwork(true);
    }
  }, []);
  return (
    <div className="container" style={{ paddingTop: 40 }}>
      <div className="row">
        <div className="col-md-12" style={{ paddingRight: 0 }}>
          <Link to="/" className="navbar-brand hidden-xs-down">
            <img src={SmallLogo} alt="" style={{ height: "5rem" }} />
          </Link>
          <Link to="/" className="navbar-brand hidden-unless-xs">
            <img src={SmallLogo} alt="" style={{ height: "4rem" }} />
          </Link>
          {window.userAddress ? (
            isWrongNetwork ? (
              <button
                className="btn btn-primary js-tilt"
                id="btn-connect"
                ref={(el) => {
                  if (el) {
                    el.style.setProperty(
                      "background-color",
                      "#ffc107",
                      "important"
                    );
                    el.style.setProperty("color", "#000000", "important");
                    el.style.setProperty("font-weight", "500", "important");
                  }
                }}
                style={{
                  marginRight: "30px",
                  float: "right",
                  marginTop: "10px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
                data-tilt-perspective="300"
                data-tilt-speed="700"
                data-tilt-max="24"
                onClick={changeNetwork}
              >
                WRONG NETWORK
              </button>
            ) : (
              <button
                className="btn btn-primary js-tilt"
                id="btn-connect"
                ref={(el) => {
                  if (el) {
                    el.style.setProperty(
                      "background-color",
                      "#ffc107",
                      "important"
                    );
                    el.style.setProperty("color", "#000000", "important");
                    el.style.setProperty("font-weight", "500", "important");
                  }
                }}
                style={{
                  marginRight: "30px",
                  float: "right",
                  marginTop: "10px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
                data-tilt-perspective="300"
                data-tilt-speed="700"
                data-tilt-max="24"
              >
                {window.userAddress.substr(0, 5)}...
                {window.userAddress.substr(38, 42)}
              </button>
            )
          ) : (
            <button
              className="btn btn-primary js-tilt"
              id="btn-connect"
              ref={(el) => {
                if (el) {
                  el.style.setProperty(
                    "background-color",
                    "#ffc107",
                    "important"
                  );
                  el.style.setProperty("color", "#000000", "important");
                  el.style.setProperty("font-weight", "500", "important");
                }
              }}
              style={{
                marginRight: "30px",
                float: "right",
                marginTop: "10px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
              data-tilt-perspective="300"
              data-tilt-speed="700"
              data-tilt-max="24"
              onClick={handleConnectMetamask}
            >
              CONNECT
            </button>
          )}
          {/* href="https://traderjoexyz.com/trade?outputCurrency=0xe1328bD8ba00AaaD1BA60C68B021Fb6A3BB56FD7#/" */}
          <a
            href="#"
            className="btn btn-primary js-tilt"
            id="buy_banana"
            ref={(el) => {
              if (el) {
                el.style.setProperty(
                  "background-color",
                  "#ffc107",
                  "important"
                );
                el.style.setProperty("color", "#000000", "important");
                el.style.setProperty("font-weight", "500", "important");
              }
            }}
            style={{
              marginRight: 0,
              float: "right",
              marginTop: "10px",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
            data-tilt-perspective="300"
            data-tilt-speed="700"
            data-tilt-max="24"
            rel="noreferrer"
          >
            BUY
          </a>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default HeaderSec;
