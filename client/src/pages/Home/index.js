import { useQuery } from "@apollo/client";
import "./index.css";
import Nav from "../../components/utils/nav";
import CarouselContainer from "../../components/displays/carouselContainer";
import { Carousel, CarouselItem } from "../../components/displays/carousel";
import { QUERY_ALL_PROJECTS, QUERY_ALL_USERS } from "../../utils/queries";
import { useState, useEffect } from "react";

function Home() {

    const carouselData = {
      projects: useQuery(QUERY_ALL_PROJECTS, {  // add find incomplete projects
        fetchPolicy: "no-cache"
      }),
      users: useQuery(QUERY_ALL_USERS, { // add find devs looking for work
        fetchPolicy: "no-cache"
      }),
      completedProjects: useQuery(QUERY_ALL_PROJECTS, {  // add find complete projects
        fetchPolicy: "no-cache"
      })
    }

      // const [carouselType, setCarouselType] = useState([])

      //    useEffect(() => {
      //   setCarouselType(carouselData.projects);
      //   }, []) 

    

    // for(let i = 0; i < carouselData.projects.length; i++){// for every element in arr, push 3 items into carouselData[0], push the next 3 items into carouselData[1]...
    //   const carouselGroupData = []; // groups of 3 projects, to be passed to card  //   then pass carouselData to the card
  
    //   let carouselObj = []; // hold groups of 3 items.  let so we can wipe it out
  
    //   if(i < 3) { // define group of 3 items
    //     for(let k = 0; k < (3 || carouselData.projects.length); k++){  // up to 3 iterations
    //     carouselObj.push(carouselData.projects[i]); // prop data from parent added 1 at a time
    //       };
    //     carouselGroupData.push(carouselObj);    // push prop data to outer array (carouselData)
    //     }      
    //   if(i > 3) { // after 3 iterations, create chunks of 3
    //     for(let c = i; c < ((i + 3) || c < carouselData.projects.length); c++) {  // run 3 iterations at a time
    //       carouselObj = [];
    //       carouselObj.push(carouselData.projects[i]);
    //     };
    //     carouselGroupData.push(carouselObj);
    //   }
  
      console.log('==== carouselData: ===', carouselData)
  
    // carouselData.map((data) =>{})}



  

    // console.log("CarouselProjects: ", carouselData.projects.data.allProjects)
    // console.log("CarouselUsers: ", carouselData.users.data.allUsers)
    // console.log("CarouselComplete: ", carouselData.completedProjects.data.allProjects)
  if(carouselData.projects.loading || carouselData.users.loading || carouselData.completedProjects.loading) { return (<><div>Loading...</div></>)}
  return (
    <>
      <div>
        <div>
          <h1 className="m-20 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
            Welcome to Codeflix
          </h1>
        </div>
        <div>
          <h3 className="text-center italic font-bold">Simple, yet signficant</h3>
          {/* maybe this can link to profile with an add project button */}
          <h4 className="text-center">
            Looking for a project to get started on? Need a developer? We got
            you! Get started on your project ideas today.<br></br> Search for
            projects, developers, and view final projects
          </h4>
        </div>
      </div>

      <div>
        <div className="h-screen">
          <Carousel className="carousel-item">
            <CarouselItem className="carousel-item" carouselData={carouselData.projects.data.allProjects}>    
            </CarouselItem>
            <CarouselItem className="carousel-item" carouselData={carouselData.projects.data.allProjects}>    
            </CarouselItem>
            <CarouselItem className="carousel-item" carouselData={carouselData.projects.data.allProjects}>    
            </CarouselItem>
          </Carousel>
          <Carousel className="carousel-item" >
            <CarouselItem carouselType={carouselData.users.data.allUsers}>
            </CarouselItem>
          </Carousel>
          <Carousel className="carousel-item">
            <CarouselItem carouselType={carouselData.completedProjects.data.allProjects}>
            </CarouselItem>
          </Carousel>
        </div>
      </div> 
      {/* const { loading, data } = useQuery(QUERY_PROJECT, {
 fetchPolicy: "no-cache",
});

const project = useQuery(QUERY_PROJECT, {
fetchPolicy: "no-cache",
});

const dev = useQuery(QUERY_DEV, {
fetchPolicy: "no-cache",
});

const complete = useQuery(QUERY_COMPLETE, {
fetchPolicy: "no-cache",
  });  */}


      <div>This is Homepage</div>
      <Nav></Nav>
    </>
  );
}

export default Home;


/*
<div>
<div className="h-screen">
  <Carousel className="carousel-item">
    <CarouselItem className="carousel-item">    
      <Card carouselType={carouselType}/>
      <Card carouselType={carouselType}/>
      <Card carouselType={carouselType}/>
    </CarouselItem>
    </Carousel>
    <Carousel className="carousel-item">
    <CarouselItem>
      <Card carouselType={carouselType}/>
      <Card carouselType={carouselType}/>
      <Card carouselType={carouselType}/>
    </CarouselItem>
    </Carousel>
    <Carousel className="carousel-item">
    <CarouselItem>
      <Card carouselType={carouselType}/>
      <Card carouselType={carouselType}/>
      <Card carouselType={carouselType}/>
    </CarouselItem>
  </Carousel>
</div>
</div> */