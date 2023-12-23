import React from 'react';
import { Link } from 'react-router-dom';

// Style
import './Footer.css';

// Images
import YouTubeBW from '../../assets/images/youtube-bw.png';
import TwitterBW from '../../assets/images/twitter-bw.png';
import GlobeIcon from '../../assets/images/globe.png';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row flex-wrap">
          <div className="column column-50 copyright">
            <div className="inner">
              <div>
                <h3>Managed by RADEE8</h3>
                <div>
                  <a
                    href="https://www.youtube.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={YouTubeBW} alt="YouTube"></img>
                  </a>
                  <a
                    href="https://www.twitter.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={TwitterBW} alt="Twitter"></img>
                  </a>
                </div>
                <br />
                <p>&copy; 2023 RADEE8. All rights reserved.</p>
              </div>
            </div>
          </div>
          <div className="column column-50">
            <div className="inner">
              <div className="footer-links">
                <div className="row flex-wrap">
                  <div className="column column-33">
                    <div className="inner">
                      <h4>RADEE8</h4>
                      <ul>
                        <li>
                          <Link to="/">Contact Us</Link>
                        </li>
                        <li>
                          <Link to="/success-story">Success Stories</Link>
                        </li>
                        <li>
                          <Link to="/">Social Media</Link>
                        </li>
                        <li>
                          <Link to="/">Careers</Link>
                        </li>
                        <li>
                          <Link to="/">Disclamer</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="column column-33">
                    <div className="inner">
                      <h4>STAY CONNECTED</h4>
                      <ul>
                        <li>
                          <Link to="/">Blog</Link>
                        </li>
                        <li>
                          <Link to="/success-story">Newsletter</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="column column-33">
                    <div className="inner">
                      <h4>
                        <img
                          src={GlobeIcon}
                          alt="Globe"
                          title="Switch Language"
                        ></img>
                        EN
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
