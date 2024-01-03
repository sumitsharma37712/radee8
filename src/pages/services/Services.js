import React from "react";
// Style
import "./Services.css";
import image from "../../assets/images/cunstructq.jpg"
const Services = () => {

  return (
    <>
      <div>

        <div className="container service-section" data-aos="fade-up">
          <div className="sectionHead row" >
            <h1 data-aos="flip-left">Our Services</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quaerat quod placeat, odio maiores nulla iste. Earum provident explicabo delectus mollitia neque dolorem distinctio. Rem maxime molestiae aliquid exercitationem cumque.
            </p>
          </div>
          <div className="serviceBody row">
            <h3 className="show-on-mobile">Web Design & Development</h3>

            <div className="column column-40" data-aos="fade-right">
              <img src={image} alt="" />
            </div>
            <div className="column column-60" data-aos="fade-left">
              <h3 className="hide-on-mobile">Web Design & Development</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga facere nostrum reprehenderit perferendis cumque porro libero. Sunt nisi cumque mollitia quo accusamus natus molestiae ipsam in deleniti dolor? Eveniet, quis.
              </p>
            </div>
          </div>
          <div className="serviceBody row">

            <div className="column column-40" data-aos="fade-right">
              <img src={image} alt="" />
            </div>
            <div className="column column-60" data-aos="fade-left">
              <h3>Web Design & Development</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga facere nostrum reprehenderit perferendis cumque porro libero. Sunt nisi cumque mollitia quo accusamus natus molestiae ipsam in deleniti dolor? Eveniet, quis.
              </p>
            </div>
          </div>
          <div className="serviceBody row">
            <div className="column column-40" data-aos="fade-right">
              <img src={image} alt="" />
            </div>
            <div className="column column-60" data-aos="fade-left">
              <h3>Web Design & Development</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga facere nostrum reprehenderit perferendis cumque porro libero. Sunt nisi cumque mollitia quo accusamus natus molestiae ipsam in deleniti dolor? Eveniet, quis.
              </p>
            </div>
          </div>
          <div className="serviceBody row">
            <div className="column column-40" data-aos="fade-right">
              <img src={image} alt="" />
            </div>
            <div className="column column-60" data-aos="fade-left">
              <h3>Web Design & Development</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga facere nostrum reprehenderit perferendis cumque porro libero. Sunt nisi cumque mollitia quo accusamus natus molestiae ipsam in deleniti dolor? Eveniet, quis.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Services;