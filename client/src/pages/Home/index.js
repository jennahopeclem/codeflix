import "./index.css";
import Carousel, { CarouselItem } from "../../components/displays/carousel";
import Card from "../../components/displays/card";
// import { useQuery } from "@apollo/client";
// import { QUERY_PROJECT, QUERY_DEV, QUERY_COMPLETE } from "../../utils/queries";

function Home() {
  // const project = getProjectQuery()

  return (
    <>
      <div>
        <div>
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
            Welcome to Codeflix
          </h1>
        </div>
        <div>
          <h3 class="text-center italic font-bold">Simple, yet signficant</h3>
          {/* maybe this can link to profile with an add project button */}
          <h4 class="text-center">Start your project today</h4>
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
          <Carousel>
            <CarouselItem className="flex flex-row">
              <Card className="flex-nowrap" />
              <Card className="flex-nowrap" />
              <Card className="flex-nowrap" />
            </CarouselItem>
            <CarouselItem>
              <Card className="" />
            </CarouselItem>
            <CarouselItem>
              <Card className="" />
            </CarouselItem>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Home;
