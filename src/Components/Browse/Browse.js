import React, { useEffect, useState } from "react";
import Fintech from "./../../Assets/Fintech.png";
import Ecommerce from "./../../Assets/Ecommerce.png";
import HealthCare from "./../../Assets/HealthCare.png";
import Hospitality from "./../../Assets/Hospitality.png";
import Logistics from "./../../Assets/Logistics.png";
import Media from "./../../Assets/Media.png";
import Sectors from "./Sectors";

const Browse = () => {
  // this state is being managed with usestate because it is local to this component
  const [lis, setlis] = useState([]);

  const runfunction = () => {
    // An api call will  be made here to set the state
    const apiValue = [
      {
        image: Logistics,
        sector: "Logistics & Transportation",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
      },
      {
        image: Fintech,
        sector: "Fintech",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
      },
      {
        image: Ecommerce,
        sector: "Ecommerce",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
      },
      {
        image: Media,
        sector: "Media",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
      },
      {
        image: Hospitality,
        sector: "Hospitality",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
      },
      {
        image: HealthCare,
        sector: "Healthcare",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
      },
    ];
    setlis(apiValue);
  };

  useEffect(() => {
    runfunction();
  }, []);

  return (
    <div className="bg-[#222222]/40 py-20  mx-auto w-full ">
      <h1 className="text-3xl font-Montserrat-Bold text-white mx-auto text-center mb-5 hidden md:block">
        BROWSE BY <span className="text-[#D23431]">INDUSTRIES</span>
      </h1>
      <h1 className="text-3xl font-Montserrat-Bold text-white mx-auto text-center mb-5 md:hidden">
        INDUSTRIES WE <span className="text-[#D23431]">HIRE</span> FOR
      </h1>
      <h1 className="text-white font-Montserrat-Medium text-xs  w-[80%] md:w-[50%] mx-auto text-center mb-20 sm:text-sm ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in
        lacus, duis sagittis. Eget elementum duis
      </h1>
      <div className="sm:grid sm:gap-8 md:grid-cols-2 px-4 lg:grid-cols-3 lg:gap-8 md:container  xl:max-w-7xl mx-auto w-[90%] ">
        {lis.map((a) => (
          <Sectors {...a} />
        ))}
      </div>
    </div>
  );
};

export default Browse;
