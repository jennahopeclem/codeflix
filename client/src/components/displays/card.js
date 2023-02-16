const mockData = [
    {
      name: "Codeflix Project",
      image: "/images/codeflix-wireframe.png",
      description: "String",
    //   {
    //   reference: [recruitmentSchema]
    //   }
      //   alt: String,
    },
    // {
    //   name: "Project 2",
    //   image: "/images/notetaker.png",
    //   description: "String",

    // },
    // {
    //   name: "Final Project",
    //   image: "/images/workday-planner.png",
    //   description: "String",
    // //   is_looking: {mockData},

    // },
  ];


function Card(cardData) {
  console.log('cardData: ', cardData)

  // if(cardData.carouselType[0].github) console.log('Users sent to carousel item: ', cardData.carouselType);
  // if(cardData.carouselType[0].complete === true) console.log('Completed projects sent to carousel item: ', cardData.carouselType);
// When recruitment queries are working, change from '.complete' to '.looking_for.is_looking'
    // console.log('Active projects sent to carousel item: ', cardData.carouselType);
  return (
    <>

        <div className="card max-w-sm w-full lg:max-w-full lg:flex px-5">

            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-4">            
            <img
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            src={cardData.thumbnail}
            alt={cardData.alt}
            />
                <p className="text-gray-900 font-bold text-xl mb-2">
                {cardData.name}
                </p>
                <div className="text-sm text-gray-800 flex items-center break-words">{cardData.description}</div>
                <p className="text-gray-700 text-base">Accepting {/*{cardData.looking_for.num_recruits}*/} new recruits</p>
            </div>
            <div className="flex items-center">
                <div className="text-sm">
                { 
                  cardData.looking_for
                  ? <p className="text-gray-600 leading-none">Seeking {cardData.looking_for.specialty}.</p> 
                  : <p> Any </p>
                }
                </div>
            </div>
            </div>
        </div>
    </>
  )}

export default Card;
