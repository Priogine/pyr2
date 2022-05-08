import React, { useEffect, useState } from "react";

// ----- image import -----
import Background3 from "../../assets/images/background-3.jpg";
// import Gorilla from "../../assets/images/gorilla/gorilla.png";

// ----- icon import -----
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaDollarSign, FaNetworkWired } from "react-icons/fa";

// ----- layout import -----
import HeaderSec from "../../layout/header-sec";
import { precision } from "../../Utils/precision";

import axios from "axios";

const Dapp = () => {
  const [myNodes, setMynodes] = useState(0);
  const [dailyReward, setDailyReward] = useState(0);
  const [rewards, setRewards] = useState(0);
  const [NodeCount, setNodeCount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [claiming, setClaiming] = useState("");
  const [creating, setCreating] = useState("");
  const [nodeList, setNodelist] = useState([]);
  const [tokenPrice, setTokenprice] = useState(0);
  const [createFlg, setCreateflg] = useState(false);
  const [claimFlg, setClaimflg] = useState(false);
  const fetchData = async () => {
    const totalNode = await window.bananaContract.methods
      .getTotalCreatedNodes()
      .call();
    const mycount = await window.bananaContract.methods
      .getNodeNumberOf(window.userAddress)
      .call();
    var totalReward = 0;
    if (mycount > 0) {
      totalReward = await window.bananaContract.methods
        .getRewardTotalAmount()
        .call();
    }
    const Banaan_balance = await window.bananaContract.methods
      .balanceOf(window.userAddress)
      .call();
    const rewardRate = await window.nodeContract.methods.rewardRate().call();
    var temp = [];
    for (var i = 0; i < mycount; i++) {
      const node = await window.nodeContract.methods
        ._nodesOfUser(window.userAddress, i)
        .call();
      const reward = await window.nodeContract.methods
        ._getRewardOfNode(window.userAddress, i)
        .call();
      var temp_item = {
        ID: node.ID,
        creationTime: node.creationTime,
        lastClaimedTime: node.lastClaimedTime,
        rewardAvailable: (precision.remove(reward, 15) / 1000).toFixed(3),
        tokenValue: node.tokenValue,
      };
      temp.push(temp_item);
    }

    const reserves = await window.pairContract.methods.getReserves().call();
    const marketPrice = reserves[1]/ reserves[0];
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2,olympus,magic-internet-money&vs_currencies=usd";
    const { data } = await axios.get(url);
    setTokenprice(data["avalanche-2"].usd * marketPrice);
    setDailyReward(Number(rewardRate) / 100);
    setRewards(precision.remove(totalReward, 15));
    setMynodes(mycount);
    setNodeCount(totalNode);
    setBalance((precision.remove(Banaan_balance, 15) / 1000).toFixed(3));
    setNodelist(temp);
  };
  useEffect(() => {
    if(window.userAddress) {
      fetchData();
    } 
    const interval = setInterval(async () => {
      if(myNodes > 0) {
        const totalReward = await window.bananaContract.methods
        .getRewardTotalAmount()
        .call();
      setRewards(precision.remove(totalReward, 15));
      }
    }, 45000);

    return () => clearInterval(interval);
  }, []);
  const handleCreateNode = async () => {
    if (balance < 10) {
      alert(
        "You don't have enough EASY token now. Please buy it and try again."
      );
      return;
    } else if (createFlg === true) {
      alert("Creating a node now. Please try again later.");
      return;
    }
    try {
      await window.bananaContract.methods
        .createNodeWithTokens()
        .send()
        .on("transactionHash", async () => {
          setCreateflg(true);
          setCreating("Creating ...");
        })
        .on("receipt", async () => {
          // setClaimButton("Claimed");
          setCreating("");
          setCreateflg(false);
          fetchData();
        });
    } catch (err) {
      console.log(err);
    }
  };
  const handleClaimrewards = async () => {
    if (claimFlg === true) {
      alert("Claiming now. Please try again later.");
      return;
    }
    try {
      await window.bananaContract.methods
        .cashoutAll()
        .send()
        .on("transactionHash", async () => {
          setClaimflg(true);
          setClaiming("Claiming ...");
        })
        .on("receipt", async () => {
          // setClaimButton("Claimed");
          setClaiming("");
          setClaimflg(false);
          fetchData();
        });
    } catch (err) {
      console.log(err);
    }
  };
  const claimNode = async (index) => {
    if (claimFlg === true) {
      alert("Claiming now. Please try again later.");
      return;
    }
    try {
      await window.bananaContract.methods
        .cashoutNodeReward(index)
        .send()
        .on("transactionHash", async () => {
          setClaimflg(true);
        })
        .on("receipt", async () => {
          // setClaimButton("Claimed");
          setClaimflg(false);
          fetchData();
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="dapp-background">
      <div className="main" style={{ paddingTop: 0 }}>
        <div className="container">
          <HeaderSec />
          <br />
          <br />
          <div className="row">
          <div className="col-xl-3 col-lg-6 mt-3">
              <div
                className="concept-box-dapp"
                style={{ paddingTop: "20px", paddingBottom: "30px" }}
              >
                <span className="badge badge-warning">1 EASY</span>{" "}
                <span className="badge badge-success" id="banana_price">
                  {tokenPrice ? tokenPrice.toFixed(4) : "--"} $
                </span>
                <hr style={{ marginTop: "13px", marginBottom: "13px" }} />
                <span className="badge badge-light">
                  You have: <span id="banana_balance">{balance}</span> EASY
                </span>
                <hr style={{ marginTop: "13px", marginBottom: "13px" }} />
                <button
                  className="btn btn-primary js-tilt"
                  id="create-node"
                  onClick={handleCreateNode}
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
                >
                  {creating ? (
                    creating
                  ) : (
                    <div>
                      Create a node
                      <br />
                      <span style={{ fontSize: "11px" }}>1 node=10 EASY</span>
                    </div>
                  )}
                </button>
                <hr style={{ marginTop: "13px", marginBottom: "13px" }} />
                <button
                  className="btn btn-primary js-tilt"
                  id="claim-rewards"
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
                  onClick={handleClaimrewards}
                >
                  {claiming ? claiming : "Claim rewards"}
                </button>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 mt-3">
              <div className="concept-box-dapp" style={{ padding: "40px" }}>
                <AiOutlineInfoCircle
                  style={{ color: "#ffc107", fontSize: "64px" }}
                />
                <br />
                <br />
                <h5 style={{ marginBottom: "25px" }}>My nodes</h5>
                <div
                  id="my_nodes"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    color: "#000",
                    marginBottom: "10px",
                  }}
                >
                  {myNodes}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#292929",
                  }}
                >
                  Maximum: 100
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 mt-3">
              <div className="concept-box-dapp" style={{ padding: "40px" }}>
                <FaDollarSign style={{ color: "#ffc107", fontSize: "64px" }} />
                <br />
                <br />
                <h5 style={{ marginBottom: "25px" }}>My rewards</h5>
                <div
                  id="total_rewards"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    color: "#000",
                    marginBottom: "10px",
                  }}
                >
                  {(rewards / 1000).toFixed(3)}
                </div>
                <span
                  id="b_rewards"
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#292929",
                  }}
                >
                  Daily/Node: {dailyReward} EASY
                </span>
                <span id="boost_is_real" style={{ display: "none" }}>
                  <i
                    className="fas fa-check-circle"
                    style={{ color: "green", display: "none" }}
                    id="claim_ok2"
                  ></i>
                  <i
                    className="fas fa-times-circle"
                    style={{ color: "firebrick", display: "none" }}
                    id="claim_not_ok2"
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 mt-3 ">
              <div className="concept-box-dapp" style={{ padding: "40px" }}>
                <FaNetworkWired
                  style={{ color: "#ffc107", fontSize: "64px" }}
                />
                <br />
                <br />
                <h5 style={{ marginBottom: "25px" }}>All nodes</h5>
                <div
                  id="all_nodes"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    color: "#000",
                    marginBottom: "10px",
                  }}
                >
                  {NodeCount}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#292929",
                    height:'23px'
                  }}
                >
                  {/* 1 node=10 EASY */}
                </div>
              </div>
            </div>
            
            <div
              className="table-responsive"
              style={{
                padding: "30px",
                backgroundColor: "rgba(250, 250, 250, 0.5)",
                borderRadius: "20px",
                margin: "16px",
                boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.4)",
                flexShrink: "unset",
              }}
              id="nodes_list"
            >
              <center>
                <span className="badge badge-light">
                  Reload the page to update your rewards
                </span>
              </center>
              <br />
              <table className="table table-bordered mg-b-0 text-md-nowrap" style={{borderColor:'black'}}>
                <thead>
                  <tr style={{ color: "#535353" }}>
                    <th>#</th>
                    <th>Node ID</th>
                    <th>Created</th>
                    <th>Value</th>
                    <th>Available Rewards</th>
                    <th>
                      <center>Manage</center>
                    </th>
                    <th>
                      <center>Daily EASY</center>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {nodeList.map((node, idx) => (
                    <tr style={{ lineHeight: 2.5 }} key={idx}>
                      <td style={{ fontWeight: 600 }}>{idx + 1}</td>
                      <td>{node.ID}</td>
                      <td>
                        {new Date(
                          Number(node.creationTime) * 1000
                        ).toLocaleDateString("en-US")}
                      </td>
                      <td>
                        {(precision.remove(node.tokenValue, 15) / 1000).toFixed(
                          3
                        )}{" "}
                        EASY
                      </td>
                      <td>{node.rewardAvailable} EASY</td>
                      <td style={{ textAlign: "center" }}>
                        <button
                          className="btn btn-primary js-tilt"
                          id="btn-connect"
                          style={{
                            fontSize: 14,
                            padding: "5px 12px",
                            fontWeight: 600,
                            cursor: "pointer",
                          }}
                          ref={(el) => {
                            if (el) {
                              el.style.setProperty(
                                "background-color",
                                "#ffc107",
                                "important"
                              );
                              el.style.setProperty(
                                "color",
                                "#000000",
                                "important"
                              );
                              el.style.setProperty(
                                "font-weight",
                                "500",
                                "important"
                              );
                            }
                          }}
                          data-tilt-perspective="300"
                          data-tilt-speed="700"
                          data-tilt-max="5"
                          onClick={() => claimNode(idx)}
                        >
                          Claim
                        </button>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="badge badge-success" id="banana_price">
                          {dailyReward.toFixed(2)} / day
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade bd-example-modal-lg"
        id="node_name_warning"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="node_name_error"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div
              className="modal-img-wrap"
              style={{ backgroundImage: `url(${Background3})` }}
            ></div>
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <h4 style={{ color: "#a0a0a0", fontWeight: 800 }}>
                      <i className="far fa-info-circle fa-2x"></i> Invalid node
                      name
                    </h4>
                  </div>
                  <div className="col-xl-12">
                    <p className="mb-3">
                      The node name must follow these rules:
                    </p>
                    <ul className="app-list mt-4">
                      <li>Must be UNIQUE.</li>
                      <li>Must have a minimum of 4 characters.</li>
                      <li>Must have a maximum of 30 characters.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade bd-example-modal-lg"
        id="node_balance_warning"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="node_balance_error"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div
              className="modal-img-wrap"
              style={{ backgroundImage: `url(${Background3})` }}
            ></div>
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <h4 style={{ color: "#a0a0a0", fontWeight: 800 }}>
                      <i className="far fa-info-circle fa-2x"></i> Insufficient
                      EASY
                    </h4>
                  </div>
                  <div className="col-xl-12">
                    <p className="mb-3">
                      You need a minimum of 10 EASY to create a node.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade bd-example-modal-lg"
        id="node_reward_warning"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="node_reward_error"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div
              className="modal-img-wrap"
              style={{ backgroundImage: `url(${Background3})` }}
            ></div>
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <h4 style={{ color: "#a0a0a0", fontWeight: 800 }}>
                      <i className="far fa-info-circle fa-2x"></i> No nodes
                    </h4>
                  </div>
                  <div className="col-xl-12">
                    <p className="mb-3">
                      You need a minimum of 1 NODE to claim rewards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <img
        id="gorilla"
        src={Gorilla}
        data-xblocker="passed"
        style={{ visibility: "visible" }}
        alt="gorilla"
      /> */}

      <div style={{ height: 318 }}></div>
    </div>
  );
};

export default Dapp;
