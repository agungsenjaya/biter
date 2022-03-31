import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import 'bootstrap/dist/js/bootstrap.min.js';
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
                <img src="img/about.png" alt="" width="100%" />
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
                                <div className="mb-roadmap-block grad-1 text-white">
                                    <div className="mb-roadmap-title-wrapper">
                                        <h5 className="mb-0">Launch Phase</h5>
                                    </div>
                                    <ul className="mb-roadmap-list-wrapper">
                                        <li>Telegram Group Launch</li>
                                        <li>Contact Deplyment</li>
                                        <li>DEX Listing (PancakeSwap)</li>
                                        <li>WEbsite Launch</li>
                                    </ul>
                                </div>
                            </div>
                            <div data-wow-delay="0.15s" className="mb-roadmap-block-wrapper right stage-1 wow animate__fadeInUp">
                                <div className="mb-roadmap-block grad-1 text-white">
                                    <div className="mb-roadmap-title-wrapper">
                                        <h5 className="mb-0">Growth Phase</h5>
                                    </div>
                                    <ul className="mb-roadmap-list-wrapper">
                                        <li>Advertising Cmpaigns</li>
                                        <li>Influencer Promotions</li>
                                        <li>Coingecko Listing</li>
                                        <li>Cointmarketcap Listing</li>
                                        <li>Apply for initial CEK</li>
                                    </ul>
                                </div>
                            </div>
                            <div data-wow-delay="0.2s" className="mb-roadmap-block-wrapper left stage-2 wow animate__fadeInUp">
                                <div className="mb-roadmap-block grad-1 text-white">
                                    <div className="mb-roadmap-title-wrapper">
                                        <h5 className="mb-0">Expansion Phase</h5>
                                    </div>
                                    <ul className="mb-roadmap-list-wrapper">
                                        <li>Audit Solutions</li>
                                        <li>Bridge to Bitgert Blockchain, Relaychain, Parachain, and Polygon</li>
                                        <li>Techrate Audit</li>
                                        <li>Media Promotions</li>
                                    </ul>
                                </div>
                            </div>
                            <div data-wow-delay="0.25s" className="mb-roadmap-block-wrapper right stage-3 wow animate__fadeInUp">
                                <div className="mb-roadmap-block grad-1 text-white">
                                    <div className="mb-roadmap-title-wrapper">
                                        <h5 className="mb-0">Utility Phase</h5>
                                    </div>
                                    <ul className="mb-roadmap-list-wrapper">
                                        <li>V1. Swap Platform</li>
                                        <li>Dex and Launchpad Development</li>
                                        <li>Hopefully the roadmaps written in this whitepaper canbe realized i hope all holders will get provit and being lucky in their life</li>
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


<section className="space-m d-none" id="tokenomics">
    <div className="container">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h1 className="text-center fw-bold text-bit mb-4"><span className="">Tokenomics</span></h1>

                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card grad-1 border-0 text-white h-100 " >
                            <div className="card-body">
                                <h5 className="card-title title-1 mb-4 ">Allocation Supply</h5>

                                <ul className="list-group list-group-flush list-road-2">
                                    <li className="list-group-item">Total Supply 50,000,000,000</li>
                                    <li className="list-group-item">Circulating Supply 45,000,000,000 - 90% Supply</li>
                                    <li className="list-group-item">Burn will be done manually</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card grad-1 border-0 text-white h-100 " >
                            <div className="card-body">
                                <h5 className="card-title title-1 mb-4 ">Tax Sell & Buy 10%</h5>

                                <ul className="list-group list-group-flush list-road-2">
                                    <li className="list-group-item">4% Marketing Tax</li>
                                    <li className="list-group-item">10% Total Transaction Fee (4% Marketing, 6% BITRISE Distribution to Holders)</li>
                                    <li className="list-group-item">6% BITGERT/BITRISE TAX</li>
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
    <h1 className="text-center fw-bold text-bit mb-4"><span className="">Our Features</span></h1>
        <div className="row">
            <div className="col-md-6 mb-3 mb-sm-0">
                <img src="img/exchange.png" alt="" width="100%" />
            </div>
            <div className="col-md-6 align-self-center">
                <h3 className="fw-bold text-bit">Decentralized <br/> Exchange Bitgertswap</h3>
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
    <section className="space-m  text-dark" id="faq">
        <div className="container">
            <h1 className="text-center fw-bold text-bit mb-4"><span className="">Bitgerswap Token</span></h1>

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
    <h1 className="text-center fw-bold text-bit mb-4"><span className="">Our Partnership</span></h1>
    </div>
</section>
    </Layout>
  );
}
