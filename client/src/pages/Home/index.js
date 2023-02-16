import "./index.css";
import Nav from "../../components/utils/nav";
import { Carousel, CarouselItem } from "../../components/displays/carousel";
import Card from "../../components/displays/card";

function Home() {
  // const project = getProjectQuery()

  return (
    <>
      <div>
        <div>
          <h1 class="m-20 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
            Welcome to Codeflix
          </h1>
        </div>
        <div>
          <h3 class="text-center italic font-bold">Simple, yet signficant</h3>
          {/* maybe this can link to profile with an add project button */}
          <h4 class="text-center">
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

      <div>
        <div className="h-screen">
          <Carousel className="carousel-item">
            <CarouselItem>
              <Card />
            </CarouselItem>
          </Carousel>
        </div>
      </div>
      <div>This is Homepage</div>
      <Nav></Nav>
    </>
  );
}

export default Home;
