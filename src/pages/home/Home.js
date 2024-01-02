import React from 'react';
import { Link } from 'react-router-dom';
import {FaLinkedin} from 'react-icons/fa'
import { FaXTwitter} from 'react-icons/fa6'
// Style
import './Home.css';

// Images
import HomeVector from '../../assets/images/home-vector.png';
import Logo from '../../assets/images/logo.png';
// import youtubeIcon from '../../assets/images/youtube.png';
// import podcastIcon from '../../assets/images/podcast.png';

// Components
import Tile from '../../components/tile/Tile.js';
import Button from '../../components/button/Button.js';
import Card from '../../components/card/Card.js';

const Home = () => {
  return (
    <>
      <section className="hero" id="hero">
        <div className="container">
          <div className="row flex-wrap wrap-reverse align-items-center herosecond  ">
            <div className="column column-60 hero-text">
              <div className="inner ">
                <h1 data-aos="fade-up" data-aos-duration="1000">
                  Elevate Your Global Business with Radee8
                </h1>
                <p data-aos="fade-up" data-aos-duration="1500">
                  Welcome to Radee8, your catalyst for global business success.
                  Our team of seasoned advisors specializes in assisting
                  corporations worldwide to establish and optimize their
                  ventures. From market entry to strategic partnerships, we are
                  committed to propelling your business forward.
                </p>
              </div>
            </div>
            <div className="column column-40">
              <div
                className="inner graphics"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                <img alt="Graphics" src={HomeVector}></img>
              </div>
            </div>
          </div>
          <div className="our-specs">
            <div className="container">
              <ul className="row flex-wrap justify-content-center">
                <li
                  className="inner"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h3>We Are Focused</h3>
                </li>
                <li
                  className="inner"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <h3>We Are Fast</h3>
                </li>
                <li
                  className="inner"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <h3>We Are Futuristic</h3>
                </li>
              </ul>
              <center className="section-info">
                <h3
                  className="text-green"
                  data-aos="fade-up"
                  data-aos-duration="2500"
                >
                  <strong>We Are Radee8</strong>
                </h3>
              </center>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="glass">
            <div className="wrapper">
              <div className="row flex-wrap">
                <div className="column column-60">
                  <div className="inner">
                    <p data-aos="fade-up" data-aos-duration="500">
                      <b>About Us</b>
                    </p>
                    <h2 data-aos="fade-up" data-aos-duration="1000">
                      Empowering Global Ventures: The Radee8 Story
                    </h2>
                    <p data-aos="fade-up" data-aos-duration="1500">
                      At Radee8, we are more than consultants; we are architects
                      of success, dedicated to empowering global ventures. Our
                      journey is defined by a passion for strategic excellence and a commitment to turning business aspirations thriving  realities.
                    </p>
                    <p data-aos="fade-up" data-aos-duration="2000">
                      <Button link="#" text="Learn More" title="Learn More" />
                    </p>
                  </div>
                </div>
                <div className="column column-40">
                  <div className="inner">
                    <div className="tiles">
                      <div className="row flex-wrap justify-content-center">
                        <div className="column column-50">
                          <div
                            className="inner"
                            data-aos="fade-down"
                            data-aos-duration="500"
                          >
                            <Tile
                              percentage="40%"
                              title="savings on labour cost"
                              smallcont="*Deloitte"
                            />
                          </div>
                        </div>
                        <div className="column column-50">
                          <div
                            className="inner"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                          >
                            <Tile
                              percentage="25%"
                              title="increase in efficiency"
                              smallcont="*McKinsey"
                            />
                          </div>
                        </div>
                        <div className="column column-50">
                          <div
                            className="inner"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                          >
                            <Tile
                              percentage="79%"
                              title="more flexibale and aglie workforce"
                              smallcont="*Upwork"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <center className="section-info">
            <h2 className="title" data-aos="fade-up" data-aos-duration="500">
              Explore Our Services
            </h2>
            <h4
              className="sub-title"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Comprehensive Solutions Tailored for Your Success
            </h4>
            <p data-aos="fade-up" data-aos-duration="1500">
              At Radee8, we understand that success in global ventures requires
              more than just advice; it demands a suite of comprehensive
              services designed to navigate the intricacies of international
              business.
            </p>
          </center>

          <div className="glass">
            <div className="wrapper">
              <div
                className="grid3x3"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                <Card
                  title="Entity Setup & Management"
                  slogan="Your Success, Our Priority"
                  bold="Client-Centric Solutions"
                  description="At Radee8, your success is our paramount focus. Our client-centric approach means we tailor solutions to your unique needs."
                  link="#"
                />
                <Card
                  title="Administration & Facilities Management"
                  slogan="Decades of Excellence"
                  bold="Proven Expertise:"
                  description="Backed by a success rate of 95%, our team brings decades of collective experience to the table."
                  link="#"
                />
                <Card
                  title="Accounting & Taxation"
                  slogan="Every Stage, Every Solution"
                  bold="Holistic Approach:"
                  description="From inception to expansion, our services are seamlessly integrated into a cohesive strategy for success."
                  link="#"
                />
                <Card
                  title="Shared Human Resources"
                  slogan="Forward-Thinking Strategies"
                  bold="Innovative Solutions:"
                  description="We pride ourselves on implementing forward-thinking strategies that anticipate to the evolving needs of your business."
                  link="#"
                />
                <Card
                  title="Payroll Services"
                  slogan="Borders Beyond Boundaries"
                  bold="Global Perspective:"
                  description="Our global perspective extends beyond borders. Radee8 understands the intricacies of international markets and leverages."
                  link="#"
                />
                <Card
                  title="Technical & Software Compliance"
                  slogan="Your Success, Our Commitment"
                  bold="Collaborative Partnership:"
                  description="Radee8 is not just a service provider; we are your dedicated partners in shaping a successful international future."
                  link="#"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="container">
          <center className="section-info">
            <h2 className="title" data-aos="fade-up" data-aos-duration="1000">
              The Radee8 Approach
            </h2>
            <h4
              className="sub-title"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Crafting Transformation through Experience and Innovation
            </h4>
          </center>

          <div className="grid3x3" data-aos="fade-in" data-aos-duration="2000">
            <Card
              slogan="Your Success, Our Priority"
              title="Client-Centric Solutions"
              description="At Radee8, your success is our paramount focus. Our client-centric approach means we tailor solutions to your unique needs,"
              link="#"
            />
            <Card
              slogan="Decades of Excellence"
              title="Proven Expertise:"
              description="Backed by a success rate of 95%, our team brings decades of collective experience to the table."
              link="#"
            />
            <Card
              slogan="Every Stage, Every Solution"
              title="Holistic Approach:"
              description="From inception to expansion, our services are seamlessly integrated into a cohesive strategy for success."
              link="#"
            />
            <Card
              slogan="Forward-Thinking Strategies"
              title="Innovative Solutions:"
              description="We pride ourselves on implementing forward-thinking strategies that anticipate to the evolving needs of your business."
              link="#"
            />
            <Card
              slogan="Borders Beyond Boundaries"
              title="Global Perspective:"
              description="Our global perspective extends beyond borders. Radee8 understands the intricacies of international markets and leverages."
              link="#"
            />
            <Card
              slogan="Your Success, Our Commitment"
              title="Collaborative Partnership:"
              description="Radee8 is not just a service provider; we are your dedicated partners in shaping a successful international future."
              link="#"
            />
          </div>
        </div>
      </section>

      <section className="our-values" id="our-values">
        <div className="container">
          <div className="wrapper">
            <h3 data-aos="fade-up" data-aos-duration="1000">
              Our Values
            </h3>
            <p data-aos="fade-up" data-aos-duration="1500">
            Radee8 strives tirelessly to stand-on it's core values of Reliability, Simplicity, and Trust.
              It is our focused commitment and <b> Mission</b> to deliver Our Services through these values.
              <br />
              Our <b>Vision</b> is to build a better <b>Future</b> through technology.
            </p>
          </div>
          <div className="row flex-wrap values">
            <div className="column column-50">
              <div className="inner">
                <h3 data-aos="fade-up" data-aos-duration="1000">
                  Simplicity
                </h3>
                <hr></hr>
                <p data-aos="fade-up" data-aos-duration="1500">
                We realize that offering value to customers can be achieved through a straightforward and transparent approach, therefore Radee8 provides solutions that sound simple and work. We try to provide minimalistic, effective solutions to complex business problems.
                </p>
              </div>
            </div>

            <div className="column column-50">
              <div className="inner">
                <h3 data-aos="fade-up" data-aos-duration="1000">
                  Reliability
                </h3>
                <hr></hr>
                <p data-aos="fade-up" data-aos-duration="1500">
                Radee8 looks beyond the present to deliver future values. We care about our stakeholders. We are someone you can count on, taking ownership through our actions has been our guiding principle.
                </p>
              </div>
            </div>

            <div className="column column-50">
              <div className="inner">
                <h3 data-aos="fade-up" data-aos-duration="1000">
                  Trust
                </h3>
                <hr></hr>
                <p data-aos="fade-up" data-aos-duration="1500">
                We believe in doing the right thing always. We honour our commitments and believe in complete transparency.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="row flex-wrap blogs">
            <div className="column column-50">
              <div
                className="inner"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h3>RADEE8 Blogs</h3>
                <p>
                  Coming Soon!!
                </p>
                <Button
                  link="#"
                  text="LATEST BLOGS"
                  title="Latest Blogs"
                  className="outline"
                />
              </div>
            </div>
            <div className="column column-50 logo">
              <div
                className="inner"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Link to="/">
                  <img src={Logo} alt="Brand"></img>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter" id="newsletter">
        <div className="container">
          <div className="row flex-wrap">
            <div className="column column-50">
              <div
                className="inner"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="glass">
                  <h3>RADEE8 Newsletters</h3>
                  <p>
                    Sign up to the newsletter and learn about new resources, new
                    commits, new proposals, and more.
                  </p>
                  <div className="row subscribe">
                    <input type="email" required placeholder="Email"></input>
                    <button className="btn bg-green subscribe">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="column column-50">
              <div
                className="inner"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="glass">
                  <h3>Let's Connect </h3>
                  <p>
                    More videos, more episodes. Discussions between industry
                    leaders in both blockchain and technology, our team, and
                    community developers.
                  </p>
                  <div className="row flex-wrap align-items-center">
                    <div className="column column-50">
                      <div className="inner">
                        <a
                          href="https://www.linkedin.com/company/radee8"
                          rel="noreferrer"
                          target="_blank" className='inner-icon'
                        >
                          LinkedIn <FaLinkedin style={{color:'#ffff'}}/>
                        </a>
                      </div>
                    </div>
                    <div className="column column-50">
                      <div className="inner">
                        <a
                          href="https://twitter.com/Radee8Official"
                          rel="noreferrer"
                          target="_blank" className='inner-icon'
                          >
                          Twitter <FaXTwitter style={{color:'#ffff'}}/>

                        

                          {/* Facebook &nbsp; <img src={podcastIcon} alt="Podcast"></img> */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
