import "./index.css";
import Carousel from "../../components/displays/carousel";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECT, QUERY_DEV, QUERY_COMPLETE } from "../utils/queries";

function Home() {
  // const { loading, data } = useQuery(QUERY_PROJECT, {
  //   fetchPolicy: "no-cache",
  // });

  const project = useQuery(QUERY_PROJECT, {
    fetchPolicy: "no-cache",
  });

  const dev = useQuery(QUERY_DEV, {
    fetchPolicy: "no-cache",
  });

  const complete = useQuery(QUERY_COMPLETE, {
    fetchPolicy: "no-cache",
  });

  return (
    <>
      <div>
        <div>
          <h1>Welcome to Codeflix</h1>
        </div>
        <div>
          <h3>Get your project started</h3>
          {/* {loading ? (
            <div>Loading...</div> */}
          
          <Carousel group={project} />
          <Carousel group={dev} />
          <Carousel group={complete} />
        </div>
      </div>
    </>
  );
}

export default Home;
