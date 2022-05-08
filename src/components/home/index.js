import React, { Fragment } from "react";

// ----- image import -----
import Logo2x from "../../assets/images/logo/logo@2x.png";
import Gorilla1 from "../../assets/images/gorilla/gorilla1.jpg";
import Gorilla2 from "../../assets/images/gorilla/gorilla2.jpg";
import GorillaAVAX from "../../assets/images/gorilla/gorilla_avax.png";
import Buy from "../../assets/images/buy.png";

// ----- bootstrap -----
import { Accordion } from "react-bootstrap";

// ----- icon import -----
import { FaTwitterSquare, FaHands } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosRocket } from "react-icons/io";

// ----- layout import -----
import HeaderFir from "../../layout/header-fir";
import Footer from "../../layout/footer";

// ----- react-animations -----
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";

const Home = () => {
    AOS.init({ once: true, duration: 1200 });
    return (
        <Fragment>
            <HeaderFir />
            <div className="section full-height height-auto-lg hide-over background-light-blue">
                <div className="hero-center-wrap relative-on-lg">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-lg-12 text-center text-lg-left parallax-fade-top align-self-center z-bigger"
                                style={{ top: 0, opacity: 1 }}
                            >
                                <center data-aos='fade-out-down' className="animate__fadeOutDown">
                                    <img
                                        src={Logo2x}
                                        width="540"
                                        className="img-fluid"
                                        data-xblocker="passed"
                                        style={{ visibility: 'visible' }}
                                        height="427"
                                        alt="logo@2x"
                                    />
                                    <br />
                                    <br />
                                    <a
                                        className="btn btn-primary ml-lg-0 js-tilt"
                                        href="https://gorilla-nodes.gitbook.io/v1/"
                                        role="button"
                                        data-tilt-perspective="300"
                                        data-tilt-speed="700"
                                        data-tilt-max="24"
                                        target="_blank" rel="noreferrer"
                                    >
                                        <span>Whitepaper</span>
                                    </a>
                                    <a
                                        className="btn btn-primary js-tilt __mPS2id"
                                        href="https://traderjoexyz.com/trade?outputCurrency=0xeacd4f4d93527cb5d0cdfe5930d612ccfd5af436#/"
                                        data-gal="m_PageScroll2id"
                                        data-ps2id-offset="68"
                                        role="button"
                                        data-tilt-perspective="300"
                                        data-tilt-speed="700"
                                        data-tilt-max="24"
                                    >
                                        <span>Buy on TraderJoe</span>
                                    </a>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ocean">
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>
            </div>

            <div className="section padding-top-bottom-big background-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-wrap text-center">
                                <div className="back-title">$BANANA</div>
                                <h3>Gorilla Nodes.</h3>
                                <p>
                                    Gorilla Nodes is a new DeFi project that is inspired by other
                                    popular projects and aims to use node aggregation to build a
                                    profitable treasury. When designing Gorilla Nodes we chose to
                                    use the KISS method (Keep It Simple Stupid!), as we realized
                                    sometimes sounding cool and complex can actually hurt the
                                    project. With the knowledge and experience of the team,
                                    combined with the support and strength of our community, we
                                    feel we can build one of the best node projects in the space!
                                </p>
                                <br />
                                <br />

                                <div className="">
                                    <FaTwitterSquare style={{ color: '#1da1f2', fontSize: '60px' }} />
                                    <BsDiscord style={{ color: '#6a0dad', fontSize: '55px', marginLeft: '20px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section padding-top-bottom-big background-light-blue">
                <div className="container">
                    <div className="row third-section-row">
                        <div
                            className="col-md-4 third-section-col"
                            data-scroll-reveal="enter bottom move 50px over 0.6s after 0.3s"
                            data-scroll-reveal-id="1"
                            data-scroll-reveal-initialized="true"
                            data-scroll-reveal-complete="true"
                            data-aos='fade-up'
                        >
                            <div className="concept-box">
                                <AiOutlineInfoCircle style={{ color: '#981d1d', fontSize: '64px' }} />
                                <br />
                                <br />
                                <h5>A Node ?</h5>
                                <p>
                                    A node is something that can be purchased in exchange for a
                                    lifetime of passive income. The passive income the node
                                    produces is often referred to as "Rewards".
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-md-4 mt-4 mt-md-0 third-section-col"
                            data-scroll-reveal="enter bottom move 50px over 0.6s after 0.5s"
                            data-scroll-reveal-id="2"
                            data-scroll-reveal-initialized="true"
                            data-scroll-reveal-complete="true"
                            data-aos='fade-up'
                            id='concept-2'
                        >
                            <div className="concept-box">
                                <FaHands style={{ color: '#981d1d', fontSize: '64px' }} />
                                <br />
                                <br />
                                <h5>Gorilla Node</h5>
                                <p>
                                    The cost of 1 Gorilla Node will cost 10 $BANANA tokens to
                                    create. Gorilla Node will payout 1.5 $BANANA tokens per day,
                                    and then this will be reduced to 0.75 $BANANA tokens/day.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-md-4 mt-4 mt-md-0 third-section-col"
                            data-scroll-reveal="enter bottom move 50px over 0.6s after 0.7s"
                            data-scroll-reveal-id="3"
                            data-scroll-reveal-initialized="true"
                            data-scroll-reveal-complete="true"
                            data-aos='fade-up'
                            id="concept-3"
                        >
                            <div className="concept-box">
                                <IoIosRocket style={{ color: '#981d1d', fontSize: '64px' }} />
                                <br />
                                <br />
                                <h5>NFT Booster</h5>
                                <p>
                                    At time of launch there will be 1 Booster NFT available for
                                    purchase. This NFT will give a boost of 0.25 $BANANA per day,
                                    as well as allow the owner to bypass the claim tax.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section padding-top-big">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-wrap text-center">
                                <div className="back-title">TOKENOMICS</div>
                                <h3>TOKENOMICS</h3>
                            </div>
                        </div>
                        <div
                            className="col-md-6 align-self-center"
                            data-scroll-reveal="enter bottom move 100px over 0.6s after 0.3s"
                            data-scroll-reveal-id="4"
                            data-scroll-reveal-initialized="true"
                            data-scroll-reveal-complete="true"
                            data-aos='fade-up'
                        >
                            <h4>
                                Token: $BANANA
                                <br />
                                Network: Avalanche
                            </h4>
                            <p className="lead">
                                Our initial liquidity will be 5,000 $BANANA tokens and $5000 for
                                an opening starting price of $1. Our total supply will be
                                20,000,000 minted that will be held by the rewards pool.
                            </p>
                            <h5>(1) Gorilla Node will be (10) $BANANA</h5>
                            <ul className="app-list mb-5 mt-4">
                                <li>50% to Rewards Pool</li>
                                <li>20% to Treasury</li>
                                <li>20% to Development</li>
                                <li>10% to Liquidity</li>
                            </ul>
                            <small></small>
                        </div>
                        <div
                            className="col-md-6 order-first order-md-last mb-4 mb-md-0"
                            data-scroll-reveal="enter top move 100px over 1.6s after 0.3s"
                            data-scroll-reveal-id="5"
                            data-scroll-reveal-initialized="true"
                            data-scroll-reveal-complete="true"
                            data-aos='fade-down'
                        >
                            <div className="img-wrap">
                                <img
                                    src={GorillaAVAX}
                                    alt=""
                                    data-xblocker="passed"
                                    style={{ visibility: 'visible' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />

            <div
                className="section padding-top-bottom-big background-light-blue"
                id="faq"
            >
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-5 mb-4 mb-md-0"
                            data-scroll-reveal="enter bottom move 100px over 1.6s after 0.3s"
                            data-scroll-reveal-id="6"
                            data-scroll-reveal-initialized="true"
                            data-scroll-reveal-complete="true"
                            data-aos='fade-up'
                        >
                            <div className="img-wrap">
                                <img
                                    src={Buy}
                                    alt=""
                                    data-xblocker="passed"
                                    style={{ visibility: 'visible' }}
                                />
                            </div>
                        </div>
                        <div
                            className="col-md-6 offset-md-1 align-self-center"
                            data-scroll-reveal=""
                            data-scroll-reveal-id="7"
                            data-scroll-reveal-initialized="true"
                            data-scroll-reveal-complete="true"
                            data-aos='fade-in'
                        >
                            <div className="concept-box-2">
                                <h4>How to buy $BANANA ?</h4>
                                <p className="fif-six-section">
                                    $BANANA is available on
                                    <a href="https://traderjoexyz.com/">TraderJoe</a>.
                                </p>
                                <ul className="app-list mb-5 mt-4">
                                    <li>Step 1: Purchase $AVAX</li>
                                    <li>Step 2: Send $AVAX to MetaMask</li>
                                    <li>Step 3: Swap $AVAX for $BANANA on TraderJoe</li>
                                </ul>

                                <a
                                    className="btn btn-primary __mPS2id"
                                    href="https://traderjoexyz.com/trade?outputCurrency=0xeacd4f4d93527cb5d0cdfe5930d612ccfd5af436#/"
                                    data-gal="m_PageScroll2id"
                                    data-ps2id-offset="120"
                                    role="button"
                                    data-tilt-perspective="300"
                                    data-tilt-speed="700"
                                    data-tilt-max="24"
                                >
                                    <span>Buy on TraderJoe</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>

            <div className="section padding-top-bottom-big" id="faq">
                <div className="col-md-12">
                    <div className="title-wrap text-center">
                        <div className="back-title">ADOPTION</div>
                        <h3>ADOPTION</h3>
                        <p className="fif-six-section" style={{ textAlign: 'center', fontWeight: 400 }}>
                            <a
                                href="https://gorillanodes.finance/official_letter.pdf"
                                target="_blank" rel="noreferrer"
                            >
                                Official adoption letter from Dian Fossey Gorilla fund
                            </a>
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row" data-aos='fade-up'>
                        <div
                            className="col-md-6 mb-4 mb-md-0"
                            data-scroll-reveal="enter bottom move 100px over 1.6s after 0.3s"
                            data-scroll-reveal-id="8"
                            data-scroll-reveal-initialized="true"
                            data-scroll-reveal-complete="true"
                        >
                            <center>
                                <div className="img-wrap fif-six-section">
                                    <span style={{ fontSize: '30px', fontWeight: 800, color: '#000' }}>
                                        Agahebuzo
                                    </span>
                                    <br />
                                    <a
                                        href="https://gorillanodes.finance/AGAHEBUZO.pdf"
                                        target="_blank" rel="noreferrer"
                                    >
                                        View Agahebuzo adoption letter
                                    </a>
                                    <img
                                        src={Gorilla1}
                                        width="350"
                                        style={{ marginTop: '20px', visibility: 'visible' }}
                                        data-xblocker="passed"
                                        alt="gorilla1"
                                    />
                                    <br />
                                </div>
                            </center>
                        </div>
                        <div
                            className="col-md-6"
                            data-scroll-reveal="enter bottom move 100px over 1.6s after 0.3s"
                            data-scroll-reveal-id="9"
                            data-scroll-reveal-initialized="true"
                            data-scroll-reveal-complete="true"
                        >
                            <center>
                                <div className="img-wrap fif-six-section">
                                    <span style={{ fontSize: '30px', fontWeight: 800, color: '#000' }}>
                                        Kira
                                    </span>
                                    <br />
                                    <a
                                        href="https://gorillanodes.finance/KIRA.pdf"
                                        target="_blank" rel="noreferrer"
                                    >
                                        View KIRA adoption letter
                                    </a>
                                    <img
                                        src={Gorilla2}
                                        width="350"
                                        style={{ marginTop: '20px', visibility: 'visible' }}
                                        data-xblocker="passed"
                                        alt="gorilla2"
                                    />
                                    <br />
                                </div>
                            </center>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>

            <div className="section padding-top-bottom-big background-light-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-wrap text-center">
                                <div className="back-title">faq</div>
                                <h3>Questions and Answers</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-6"
                            data-scroll-reveal="enter bottom move 50px over 0.6s after 0.3s"
                            data-scroll-reveal-id="10"
                            data-scroll-reveal-initialized="true"
                            data-scroll-reveal-complete="true"
                            data-aos='fade-up'
                        >
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>When will the project launch?</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>When will the project launch?</h6>
                                        <p>Projected launch date is March 11th at 12PM EST.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What will the ticker symbol be?</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>What will the ticker symbol be?</h6>
                                        <p>The token ticker symbol will be $BANANA</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>$Banana. How much will a node cost?</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>$Banana. How much will a node cost?</h6>
                                        <p>1 Gorilla Node will cost 10 $BANANA</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                        <div
                            className="col-md-6 mt-4 mt-md-0"
                            data-scroll-reveal="enter bottom move 50px over 0.6s after 0.5s"
                            data-scroll-reveal-id="11"
                            data-scroll-reveal-initialized="true"
                            data-scroll-reveal-complete="true"
                            data-aos='fade-up'
                            id="accordion-2"
                        >
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What will opening price be?</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>What will opening price be?</h6>
                                        <p>
                                            Initial liquidity supply will be 5000 $BANANA and $5000
                                            for an opening price of $1.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Is there a Whitelist?</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>Is there a Whitelist?</h6>
                                        <p>
                                            Yes, though our team is nicknaming it the Apelist.
                                            Follow instructions in our Discord for more information!
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>How many members on the team?</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>How many members on the team?</h6>
                                        <p>
                                            The team consists of 3 members, a business specialist, a
                                            professional developer and a social media professional.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default Home;
