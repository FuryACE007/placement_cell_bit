import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import amazonLogo from "../images/Companies/amazon.png";
import Cisco from "../images/Companies/Cisco.png";
import dell from "../images/Companies/dell.png";
import deloitte from "../images/Companies/deloitte.png";
import hcl from "../images/Companies/hcl.png";
import sap from "../images/Companies/sap.png";
import zs from "../images/Companies/zs.png";
import oracle from "../images/Companies/oracle.png";

import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: 1,
      autoplaySpeed: 4000,
      cssEase: "linear",
      pauseOnHover: true,
    };
    return (
      <div className=" w-11/12 md:mt-6 items-center hover:cursor-pointer">
        <Slider {...settings}>
          <div>
            <img src={amazonLogo} alt="Amazon" className="rounded-lg shadow-md" />
          </div>
          <div>
            <img src={Cisco} alt="Amazon" className="rounded-lg shadow-md" />
          </div>
          <div>
            <img src={dell} alt="Amazon" className="rounded-lg shadow-md" />
          </div>
          <div>
            <img src={deloitte} alt="Amazon" className="rounded-lg shadow-md" />
          </div>
          <div>
            <img src={hcl} alt="Amazon" className="rounded-lg shadow-md" />
          </div>
          <div>
            <img src={oracle} alt="Amazon" className="rounded-lg shadow-md" />
          </div>
          <div>
            <img src={sap} alt="Amazon" className="rounded-lg shadow-md" />
          </div>
          <div>
            <img src={zs} alt="Amazon" className="rounded-lg shadow-md" />
          </div>
          
        </Slider>
      </div>
      
    );
  }
}