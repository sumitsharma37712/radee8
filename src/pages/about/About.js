import React, { useRef } from "react";
import { Link } from "react-router-dom";

// Style
import "./About.css";

// Images
import Tile1 from "../../assets/images/tile1.png";
import Tile2 from "../../assets/images/tile2.png";
import Tile3 from "../../assets/images/tile3.png";
import Tile4 from "../../assets/images/tile4.png";
import Tile5 from "../../assets/images/tile5.png";
import Tile6 from "../../assets/images/tile6.png";
import Tile7 from "../../assets/images/tile7.png";
import Tile8 from "../../assets/images/tile8.png";

import ElasticImage from "../../assets/images/elastic.png";
import ElasticImage2 from "../../assets/images/elastic2.png";
import CaretRight from "../../assets/images/next.png";
import FutureImage from "../../assets/images/future.png";
import { useState } from "react";

const About = () => {
  const [togle, setToggle] = useState(false);
  const [approch, setApproch] = useState(false);
  function toggle() {
    setToggle(!togle);
  }
  function approchbtn() {
    setApproch(!approch);
  }
  const headingOne = useRef(null);
  const headingTwo = useRef(null);
  const animate_X = (e) => {
    const x = (window.innerWidth = e.pageX) / 10;
    headingOne.current.style.transform = `translateX(${x}px)`;
    headingTwo.current.style.transform = `translateX(-${x}px)`;
  };

  return (
    <>
      <section className="hero" id="hero">
        <div className="contents text-anim" onMouseMove={animate_X}>
          <div className="animation ltr" ref={headingOne}>
            <h2>Welcome to Radee8</h2>
          </div>
          <div className="animation rtl text-right" ref={headingTwo}>
            <h2>
              Architects of the
              <span style={{ color: "var(--green)" }}> future</span>
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="grid-4x2">
            <article
              className="v-card"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <img src={Tile1} alt="Tile1"></img>
              <div className="card-contents">
                <p>Visionaries at Heart</p>
                <p>Pioneering Futures</p>
                <p className="description">
                  Paragraph: Crafting visions into realities; we innovate with
                  foresight, envisioning the future landscape of global success.
                </p>
                <Link to="">Explore</Link>
              </div>
            </article>
            <article
              className="v-card"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <img src={Tile2} alt="Tile2"></img>
              <div className="card-contents">
                <p>Dynamic Expertise</p>
                <p>Industry Virtuosos</p>
                <p className="description">
                  Paragraph: A dynamic blend of expertise, navigating industries
                  with finesse, leading you to triumph in global markets.
                </p>
                <Link to="">Explore</Link>
              </div>
            </article>
            <article
              className="v-card"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <img src={Tile3} alt="Tile3"></img>
              <div className="card-contents">
                <p>Strategic Innovation</p>
                <p>Strategic Alchemy</p>
                <p className="description">
                  Paragraph: Fusing strategy and innovation, we redefine
                  success, shaping a landscape where every challenge is an
                  opportunity.
                </p>
                <Link to="">Explore</Link>
              </div>
            </article>
            <article
              className="v-card"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <img src={Tile4} alt="Tile4"></img>
              <div className="card-contents">
                <p>Global Footprint</p>
                <p>Anchored in Excellence</p>
                <p className="description">
                  Paragraph: From Mumbai's hustle to Bangalore's tech pulse, we
                  strategically anchor success across global hubs.
                </p>
                <Link to="">Explore</Link>
              </div>
            </article>
            <article
              className="v-card"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img src={Tile5} alt="Tile5"></img>
              <div className="card-contents">
                <p>Holistic Mastery</p>
                <p>Mastering Every Facet</p>
                <p className="description">
                  Paragraph: From market entry to intricate HR, we master the
                  nuances, offering holistic solutions for seamless global
                  expansion.
                </p>
                <Link to="">Explore</Link>
              </div>
            </article>
            <article
              className="v-card"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <img src={Tile6} alt="Tile6"></img>
              <div className="card-contents">
                <p>Client-Centric Passion</p>
                <p>Passion for Success</p>
                <p className="description">
                  Paragraph: Your success is our passion; we craft bespoke
                  solutions, tailoring our expertise to your unique ambitions.
                </p>
                <Link to="">Explore</Link>
              </div>
            </article>
            <article
              className="v-card"
              data-aos="fade-up"
              data-aos-duration="2100"
            >
              <img src={Tile7} alt="Tile7"></img>
              <div className="card-contents">
                <p>Sustainable Success</p>
                <p>Echoes of Endurance</p>
                <p className="description">
                  Paragraph: Sustaining success echoes through our commitment,
                  creating enduring solutions that withstand the tests of time.
                </p>
                <Link to="">Explore</Link>
              </div>
            </article>
            <article
              className="v-card"
              data-aos="fade-up"
              data-aos-duration="2400"
            >
              <img src={Tile8} alt="Tile8"></img>
              <div className="card-contents">
                <p>Creative Collaboration</p>
                <p>Ideas in Harmony</p>
                <p className="description">
                  Paragraph: Collaborate creatively; our team and yours,
                  crafting a symphony of ideas, innovation, and global success.
                </p>
                <Link to="">Explore</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="journey" id="journey">
        <div className="container">
          <center className="section-info">
            <h2 className="title" data-aos="fade-up" data-aos-duration="500">
              Embark on a Transformative Journey
            </h2>
            <p data-aos="fade-up" data-aos-duration="1500">
              In the tapestry of global business, Radee8 stands as a
              transformative force. With a dynamic ensemble of industry
              virtuosos, we transcend boundaries, turning challenges into
              opportunities and ambitions into achievements.
            </p>
          </center>
        </div>
      </section>

      <section className="approach" id="approach">
        <div
          className="row flex-wrap align-items-center"
          style={{ margin: "0px" }}
        >
          <div className="column column-60">
            <img src={ElasticImage} alt="Elastic" width="100%"></img>
          </div>
          <div className="column column-40 column-contents">
            <div className="inner">
              <h3 data-aos="fade-in" data-aos-duration="1000">
                Sculpting Success with Comprehensive Approach
              </h3>
              <p data-aos="fade-in" data-aos-duration="1500">
                Radee8 is not just a service provider, we are artisans of
                management.
              </p>
              {togle && (
                <p>
                  We have a proven record with diverse set of Clients'. Radee8
                  offers tailor made solutions to businessess facing multitude
                  challenges in today's dynamic world.
                </p>
              )}
              <Link to="" onClick={toggle}>
                Read {togle ? "less" : "more"}&nbsp;&nbsp;
                <img src={CaretRight} alt="Read more"></img>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="floating-cards-block" id="floating-cards-block">
        <div className="container">
          <div className="floating-cards-stage" id="floating-card-stage-fixed">
            {/* <div>
              <h2>Strategic Steps, Global Impact</h2>
            </div>
            <div>
              <h2>Strategic Stages, Global Impact:</h2>
            </div> */}
            <div>
              <h2>Strategic Stages, Global Impact:</h2>
            </div>
          </div>

          <div className="floating-cards" id="floating-cards">
            <div className="row flex-wrap" style={{ display: "block" }}>
              <article className="parallax-cards">
                <div className="card-body">
                  <b>
                    Visionaries at Heart
                    <br />
                    Pioneering Futures
                  </b>
                </div>
              </article>
              <article className="parallax-cards right">
                <div className="card-body">
                  <b>
                    Visionaries at Heart
                    <br />
                    Pioneering Futures
                  </b>
                </div>
              </article>
              <article className="parallax-cards">
                <div className="card-body">
                  <b>
                    Visionaries at Heart
                    <br />
                    Pioneering Futures
                  </b>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="comprehensive-mastery" id="comprehensive-mastery">
        <div
          className="row flex-wrap align-items-center"
          style={{ margin: "0px" }}
        >
          <div className="column column-60">
            <img src={ElasticImage2} alt="Elastic" width="100%"></img>
          </div>
          <div className="column column-40 column-contents">
            <h3 data-aos="fade-in" data-aos-duration="1000">
            Step into the future, experience the power of Teamwork.
            </h3>
            <p data-aos="fade-in" data-aos-duration="1500">
              Radee8 is not just a service provider, we are artisans of
              management.
            </p>
            {approch && (
                <p>
                  Handcrafted solutions that fit right into your product resulting in a well finished rollouts, Radee8 believes in attention to details.
                </p>
              )}
              <Link to="" onClick={approchbtn}>
                Read {approch ? "less" : "more"} &nbsp;&nbsp;
                <img src={CaretRight} alt="Read more"></img>
              </Link>
          </div>
        </div>
      </section>

      <section className="future" id="future">
        <div className="container">
          <div className="row flex-wrap">
            <div className="column column-40 contents">
              <h3>
                Future unfolds, <br />
                embrace change
              </h3>
            </div>
            <div className="column column-60">
              <img
                src={FutureImage}
                alt="Future"
                width="100%"
                // ref={tilt}
              ></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
