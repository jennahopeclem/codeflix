import { Carousel, CarouselItem } from "./carousel";
import { Card } from "./card"
import { QUERY_ALL_PROJECTS, QUERY_ALL_USERS } from "../../utils/queries";
import { useState } from "react";
import { useQuery } from "@apollo/client";

function CarouselContainer(carouselData) {
    const [carouselType, setCarouselType] = useState(carouselData);

    if(carouselData) {
      return (
        <div>Loading...</div>
      )
    }
    if(carouselData){
    console.log("carouselData: ", carouselData)
    // console.log("carouselUser: ", carouselData.carouselData.users)
    // console.log("carouselType:====== ", carouselType)
    for(let i = 0; i < 9; i++) {
      if(i === 3) setCarouselType(carouselData.carouselData.users);
      if(i === 6) setCarouselType(carouselData.carouselData.completedProjects); // add find complete projects
      return (
        <div>
        <div className="h-screen">
          <Carousel className="carousel-item">
            <CarouselItem className="carousel-item">    {/* should all these cards be loaded by the carousel itself?  how do we get more pages? */}
              {/* <Card carouselType={carouselData.carouselData.projects.data.allProjects[0]}/>
              <Card carouselType={carouselData.carouselData.projects.data}/>
              <Card carouselType={carouselData.carouselData.projects.data}/> */}
            </CarouselItem>
          </Carousel>
        </div>
      </div>
      )
    }}
}

export default CarouselContainer;