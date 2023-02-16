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



function Card() {
  return (

    <>
    {mockData.map((mockData) => (
        <div key={mockData.id + 1} className="card max-w-sm w-full lg:max-w-full lg:flex mx-2">

            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <img
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden px-5"
              src={mockData.image}
              alt={mockData.alt}
              />
                <p className="text-sm text-gray-600 flex items-center">
                Project Name: {mockData.name}
                mock
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">Project Description: {mockData.description}</div>
                <p className="text-gray-700 text-base">recruitment schema info: is_looking</p>
            </div>
            <div className="flex items-center">
                <div className="text-sm">
                <p className="text-gray-600 leading-none">Seeking specialty:</p>
                <p className="text-gray-600">Description: {mockData.description}</p>
                </div>
            </div>
            </div>
        </div>
        
        )
    )}
    </>
  )
  
}

export default Card;
