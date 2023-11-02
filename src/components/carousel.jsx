import React, { useState, useEffect } from "react";
import { CarouselItem } from "./carouselData";
import "./carousel.css";
import GS from '../assets/Guard.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Carousel = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Guard Seraphim",
      description:
        "Static, Multi-page Responsive Website.",
      tech: "Tech used:",
      techlogo: "tech",
      icon: require("../assets/Guard.PNG"),
    },
    {
      title: "DsignFabs",
      description:
        "Static, Multi-page Responsive Website and APIdriven",
      tech: "Tech used:",
      techlogo: "tech use",
      icon: require("../assets/DsignFabs.PNG"),
    },
    {
      title: "DreamFields",
      description:
        "Full-Stack Web Application.",
      tech: "Tech used:",
      techlogo: "tech use",
      icon: require("../assets/dreamfields.PNG"),
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (


    <div className="carousel" >
      <h2 className="tittleText"><span className="redText">Recent</span>Project</h2>
      <div
        className="inner"
        style={{
          transform: `translate(-${activeIndex * 100}%)`
        }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >




          <span class="material-symbols-outlined"><FontAwesomeIcon icon={faAngleRight} flip="horizontal" /></span>{" "}

        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${index === activeIndex
                    ? "indicator-symbol-active"
                    : "indicator-symbol"
                    }`}
                >
                  <FontAwesomeIcon icon={faCircle} />
                </span>
              </button>
            );
          })}
        </div>
        <button

          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined"> <FontAwesomeIcon icon={faAngleRight} /> </span>
        </button>
      </div>
    </div>
  );
};


export default Carousel;
