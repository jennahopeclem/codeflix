import "./index.css";
import Carousel, { CarouselItem } from "../../components/displays/carousel";
// import { useQuery } from "@apollo/client";
// import { QUERY_PROJECT, QUERY_DEV, QUERY_COMPLETE } from "../../utils/queries";



function Home() {

  // const { loading, data } = useQuery(QUERY_PROJECT, {
  //   fetchPolicy: "no-cache",
  // });

  // const project = useQuery(QUERY_PROJECT, {
  //   fetchPolicy: "no-cache",
  // });

  // const dev = useQuery(QUERY_DEV, {
  //   fetchPolicy: "no-cache",
  // });

  // const complete = useQuery(QUERY_COMPLETE, {
  //   fetchPolicy: "no-cache",
  // });

const mockData = [
  {
    name: "Codeflix Project"
  }
]

    return (
      <div className="App">
        <Carousel>
        data.map((mockData) => {
          <CarouselItem>{mockData.name}
        })
          
        
          </CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </Carousel>
      </div>
    );
  }

  

//   return (
//     <>
//       <div>
//         <div>
//           <h1>Welcome to Codeflix</h1>
//         </div>
//         <div>
//           <h3>Get your project started</h3>
//           {/* {loading ? (
//             <div>Loading...</div> */}
//           <Carousel />
//           {/* <Carousel group={project} />
//           <Carousel group={dev} />
//           <Carousel group={complete} /> */}
//         </div>
//       </div>
//     </>
//   );
// }

export default Home;
