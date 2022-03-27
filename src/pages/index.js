import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js';
import AOS from 'aos';
import $ from "jquery";
import "aos/dist/aos.css";
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
export default function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();

      }, []);
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
          <div className="bg-bit py-2 text-white text-center title-1">
              <div className="container">
              Website still under development by our team.
              </div>
          </div>
        <section className="space-m hero min-vh-100">
    <div className="container">
        <div className="row flex-column-reverse flex-lg-row">
            <div className="col-md-6 offset-md-3 align-self-center text-center">
                {/* <img src="img/bitgertswap.png" alt="" width="20%" class="" /> */}
                <h1 className="text-white display-5 fw-bold">Welcome to the Moon invest <br/> <span className="text-bit">Bitgertswap Token</span></h1>
                <p>Bitgertswap is a decentralized finance network on the Binance blockchain, with functionalities such as staking, farming, lotteries and a lot more, operating similarly to a high yield certificate of deposit.</p>
                <Link className="button btn-bit" to="#">Get Bitgertswap</Link>
                <Link className="button btn-light ms-3" to="#">Whitepaper</Link>
            </div>
            {/* <div className="col-md-6 mb-3 mb-sm-0">
                <img src="https://dummyimage.com/600x500" alt="" width="100%" class="opacity-0" />
            </div> */}
        </div>
    </div>
</section>
<div className="container space-m">
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card card-body grad-1 text-white border-0">
            <div className="row text-center">
                <div className="col-md align-self-center">
                    <div className="">
                        <div className="card-body">
                            <p className="mb-0 small">Total Holders</p>
                            <h2 className="">00</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md align-self-center border-start border-dark">
                    <div className="">
                        <div className="card-body">
                            <p className="mb-0 small">Circulating Supply</p>
                            <h2 className="">00</h2>
                        </div>
                    </div>
                </div>
                
                
            </div>
            </div>
        </div>
    </div>
</div>
<section className="space-m">
    <div className="container">
        <div className="row">
            <div className="col-md-6 align-self-center mb-3 mb-sm-0">
                <h1 className="text-bit fw-bold">What is <br/> Bitgertswap Token</h1>
                <p>
                    Launched on the Binance Smart Chain (BSC) In Februari 2022, Bitgertswap is the biggest Raca reflection token brought to market Bitgertswap will give you experience about utility token.
                </p>
                <Link className="button btn-bit" to="#">Get Whitepaper</Link>
            </div>
            <div className="col-md-6">
                {/* <img src="img/man-1.png" alt="" width="50%" /> */}
            </div>
        </div>
    </div>
</section>
<div id="roadmap" className="int-section-wrapper space-m">
    <div className="sub-section first-section">
        <div className="container">
            <div className="columns">
                <div className="column">
                    <div data-wow-delay="0.1s" className="section-title-wrapper wow animate__fadeInUp">
                        <h1 className="text-center text-bit fw-bold mb-4">Roadmap</h1>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <div className="mb-roadmap-wrapper mt-40px">
                        <div className="mb-roadmap-inner">
                            <div data-wow-delay="0.1s" className="mb-roadmap-block-wrapper left stage-0 wow animate__fadeInUp">
                                <div className="mb-roadmap-block">
                                    <div className="mb-roadmap-title-wrapper">
                                        <h5 className="mb-0">Stage 1</h5>
                                    </div>
                                    <ul className="mb-roadmap-list-wrapper">
                                        <li>Game concept creation</li>
                                        <li>Creating of BSTS deflationary token</li>
                                        <li>Whitepaper creation</li>
                                        <li>Beasties.online Website launch</li>
                                        <li>Project Announcement</li>
                                        <li>Social media launch</li>
                                    </ul>
                                </div>
                            </div>
                            <div data-wow-delay="0.15s" className="mb-roadmap-block-wrapper right stage-1 wow animate__fadeInUp">
                                <div className="mb-roadmap-block">
                                    <div className="mb-roadmap-title-wrapper">
                                        <h5 className="mb-0">Stage 2</h5>
                                    </div>
                                    <ul className="mb-roadmap-list-wrapper">
                                        <li>Social Media Community expansion</li>
                                        <li>Creating the first three unique Beasties</li>
                                        <li>Project Audit</li>
                                        <li>Marketing</li>
                                        <li>DxSale presale &amp; Pancakeswap listing</li>
                                        <li>Special Halloween unique Beasties (limited edition)</li>
                                    </ul>
                                </div>
                            </div>
                            <div data-wow-delay="0.2s" className="mb-roadmap-block-wrapper left stage-2 wow animate__fadeInUp">
                                <div className="mb-roadmap-block">
                                    <div className="mb-roadmap-title-wrapper">
                                        <h5 className="mb-0">Stage 3</h5>
                                    </div>
                                    <ul className="mb-roadmap-list-wrapper">
                                        <li>Alpha version release</li>
                                        <li>Alpha version test &amp; fixes</li>
                                        <li>NFT Marketplace launch</li>
                                        <li>Cross-promo events with leading projects</li>
                                        <li>NFT Loot Boxes</li>
                                        <li>Special Christmas unique Beasties (limited edition)</li>
                                    </ul>
                                </div>
                            </div>
                            <div data-wow-delay="0.25s" className="mb-roadmap-block-wrapper right stage-3 wow animate__fadeInUp">
                                <div className="mb-roadmap-block">
                                    <div className="mb-roadmap-title-wrapper">
                                        <h5 className="mb-0">Stage 4</h5>
                                    </div>
                                    <ul className="mb-roadmap-list-wrapper">
                                        <li>Beta Version 1.0 launch</li>
                                        <li>Properties For Sale</li>
                                        <li>Build your own house</li>
                                        <li>Random Events on the main map</li>
                                        <li>PvP Battles &amp; Boss Fights</li>
                                        <li>Fiat Payment inside the Game</li>
                                        <li>Expanding to other chains (Ethereum, Polygon, etc)</li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<section className="space-m " id="tokenomics">
    <div className="container">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h3 className="text-center title-1   mb-4"><span className="">Tokenomics</span></h3>

                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card bg-bit text-white h-100 " >
                            <div className="card-body">
                                <h5 className="card-title title-1 mb-4 ">Allocation Supply</h5>

                                <ul className="list-group list-group-flush list-road-2">
                                    <li className="list-group-item">25% Burn wallet</li>
                                    <li className="list-group-item">5% Wallet marketing</li>
                                    <li className="list-group-item">2% Team Dev</li>
                                    <li className="list-group-item">68% Pancake</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-bit text-white h-100 " >
                            <div className="card-body">
                                <h5 className="card-title title-1 mb-4 ">Tax 13%</h5>

                                <ul className="list-group list-group-flush list-road-2">
                                    <li className="list-group-item">6% Marketing</li>
                                    <li className="list-group-item">5% Reward</li>
                                    <li className="list-group-item">2% Dev</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="space-m">
    <div className="container">
    <h3 className="text-center title-1   mb-4"><span className="">Our Features</span></h3>
        <div className="row">
            <div className="col-md-6 mb-3 mb-sm-0">
                <img src="https://dummyimage.com/600x400" alt="" width="100%" />
            </div>
            <div className="col-md-6 align-self-center">
                <h3 className="">Decentralized <br/> Exchange Bitgertswap</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen
                </p>
                <Link className="button btn-bit" to="#">Comingsoon</Link>
            </div>
        </div>
    </div>
</section>
<div className="">
    <section className="container space-m d-none">
        <h3 className="text-center   mb-4"><span className="">Our</span>Partner</h3>
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div className="card card-body bg-bit border-0 shadow-none">
                    <div className="row">
                        <div className="col-md-3 col-6 mb-2">
                            <img src="https://bobaraca.com/wp-content/themes/blankslate/assets/img/partner/1.png" alt="" width="100%" />
                        </div>
                        <div className="col-md-3 col-6 mb-2">
                            <img src="https://bobaraca.com/wp-content/themes/blankslate/assets/img/partner/2.png" alt="" width="100%" />
                        </div>
                        <div className="col-md-3 col-6 mb-2">
                            <img src="https://bobaraca.com/wp-content/themes/blankslate/assets/img/partner/3.png" alt="" width="100%" />
                        </div>
                        <div className="col-md-3 col-6 mb-2">
                            <img src="https://bobaraca.com/wp-content/themes/blankslate/assets/img/partner/4.png" alt="" width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="space-m  text-dark" id="faq">
        <div className="container">
            <h3 className="text-center title-1   mb-4"><span className="">Bitgerswap Token</span></h3>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="accordion" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button btn-boba collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-one" aria-expanded="false" aria-controls="flush-one">
                                    What is Bitgertswap?
                                </button>
                            </h2>
                            <div id="flush-one" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    Launched on the Binance Smart Chain (BSC) In Februari 2022, Bitgertswap is the biggest Raca reflection token brought to market Bitgertswap will give you experience about utility token (BobaRaca Swap and
                                    Boba NFT) that give you reward by holding Simply Hold Bitgertswap tokens and get rewarded in Raca on every transaction! Out auto-claim feature means your Raca Rewards Will be automatically sent to your
                                    wallet
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button btn-boba collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-two" aria-expanded="false" aria-controls="flush-two">
                                    When did you expand to Polygon?
                                </button>
                            </h2>
                            <div id="flush-two" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    In order to provide the best and most decentralized trading experience, Bitgertswap want to began its cross-chain ventures to Polygon as of January 1st 2023.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button btn-boba collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-three" aria-expanded="false" aria-controls="flush-three">
                                    Why did Bitgertswap choose radiocaca as a reward?
                                </button>
                            </h2>
                            <div id="flush-three" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    Radiocaca will be a native coin in the raca-metaverse, we want to take the opportunity to be able to join the raca-metaverse like babycake and pancake.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<section className="space-m">
    <div className="container">
    <h3 className="text-center title-1   mb-4"><span className="">Ourt Partnership</span></h3>
    </div>
</section>
    </Layout>
  );
}
