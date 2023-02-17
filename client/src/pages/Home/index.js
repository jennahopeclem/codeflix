import "./index.css";
import Nav from "../../components/utils/nav";
import { Carousel, CarouselItem } from "../../components/displays/carousel";
import Card from "../../components/displays/card";
import { QUERY_ALL_PROJECTS, QUERY_ALL_USERS } from "../../utils/queries";
import { useQuery } from "@apollo/client"
import Auth from "../../utils/auth";

function Home() {
  const myUser = Auth.loggedIn()?  Auth.getProfile().data : 'to CODEFLIX';
  // =================  QUERIES  ================================

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

  // =================  END QUERIES  ================================

  return (
    <>
      <div>
        <div>
          <h1 className="m-20 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
          Welcome {myUser.username? myUser.username : myUser}
          </h1>
        </div>
        <div>
          <h3 className="text-center italic font-bold">
            Simple, yet signficant
          </h3>
          {/* maybe this can link to profile with an add project button */}
          <h4 className="text-center">
            Looking for a project to get started on? Need a developer? We got
            you! Get started on your project ideas today.<br></br> Search for
            projects, developers, and view final projects
          </h4>
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

      {/* 
            styling added to carousel component:
                              in carousel.js(carouselItem):
                                        'flex flex-row' added to div wrapped around {children}
                              in carousel.js(carousel):
                                        'flex flex-row' added to div with "inner" class
                              in card.js
                                        'mx-2' added to first div class
*/}
      <div>
        <div className="h-screen">          
        <h1 className="text-2xl text-white font-semibold text-center">Projects looking for Developers</h1>
          <Carousel className="carousel-item">
            <CarouselItem></CarouselItem>
            <CarouselItem></CarouselItem>
            <CarouselItem></CarouselItem>
          </Carousel>
          <h1 className="text-2xl text-white font-semibold text-center">Developers looking for Projects</h1>
          <Carousel className="carousel-item">
            <CarouselItem></CarouselItem>
            <CarouselItem></CarouselItem>
            <CarouselItem></CarouselItem>
          </Carousel>          
          <h1 className="text-2xl text-white font-semibold text-center">Completed projects</h1>
          <Carousel className="carousel-item">
            <CarouselItem></CarouselItem>
            <CarouselItem></CarouselItem>
            <CarouselItem></CarouselItem>
          </Carousel>
        </div>
      </div>
      <Nav></Nav>
    </>
  );
}

export default Home;
