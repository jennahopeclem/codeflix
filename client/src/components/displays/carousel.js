import React, { useEffect, useState } from "react";
import Card from "../../components/displays/card";
import "tw-elements";
import "./Carousel.css";

export const CarouselItem = ({carouselType, width}) => {
  // pulls in carouselType from home/index.  children are now returned here rather than in Home page
  // home/index dictates which data is sent (projects, users, completed projects)
  // this dynamically seperates the carousels without much fuss, pass the array on to the child Card for rendering
  // if(carouselType[0].complete === false) console.log('Active projects sent to carousel item: ', carouselType);
  // if(carouselType[0].github) console.log('Users sent to carousel item: ', carouselType);
  // if(carouselType[0].complete === true) console.log('Completed projects sent to carousel item: ', carouselType);
// console.log('===================================', carouselType.length)


    return (
      <div className="carousel-item content-center flex flex-row">
        <Card carouselType={carouselType}/>
      </div>
    );};


export const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      //creates infinite carousel
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };
  // useEffect hook to init interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
