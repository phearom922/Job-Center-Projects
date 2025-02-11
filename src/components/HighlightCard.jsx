import React from "react";
import Highligh1 from "../assets/highlight1.jpg"
import Highligh2 from "../assets/highlight2.jpg"
import Highligh3 from "../assets/highlight3.jpg"
import Highligh4 from "../assets/highlight4.jpg"
import Highligh5 from "../assets/highlight5.jpg"
import Highligh6 from "../assets/highlight6.jpg"
import Highligh7 from "../assets/highlight7.jpg"
import Highligh8 from "../assets/highlight8.jpg"

const HighlightCard = () => {
  return (
    <div className="
    2xl:grid-cols-8 2xl:gap-4 2xl:grid 
    xl:grid-cols-5 xl:gap-4
    lg:grid-cols-4 lg:gap-2
    md:grid-cols-3 md:gap-2
    grid grid-cols-2 gap-2

    ">
      <div className="relative group cursor-pointer">
        <img src={Highligh1} alt="highlight1" />
        <div
          className="hidden absolute -top-16 -left-10 w-56 group-hover:block bg-white text-gray-900 rounded shadow
              border p-5 text-center leading-none "
        >
          <p>Customer Team Member</p>
          <div className="absolute -bottom-1.5 left-24 arrow-bottom-white"></div>
        </div>
      </div>
      <div>
        <img src={Highligh8} alt="highlight8" />
      </div>
      <div>
        <img src={Highligh2} alt="highlight2" />
      </div>
      <div>
        <img src={Highligh3} alt="highlight3" />
      </div>
      <div>
        <img src={Highligh4} alt="highlight4" />
      </div>
      <div>
        <img src={Highligh5} alt="highlight5" />
      </div>
      <div>
        <img src={Highligh6} alt="highlight6" />
      </div>
      <div>
        <img src={Highligh7} alt="highlight7" />
      </div>
    
    </div>
  );
};

export default HighlightCard;
