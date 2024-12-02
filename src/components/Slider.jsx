import React from "react";
import img1 from "../assets/01.jfif";
import img2 from "../assets/02.jfif";
import img3 from "../assets/03.jfif";
import img4 from "../assets/04.jfif";
import img5 from "../assets/05.jfif";
import img6 from "../assets/06.jfif";
const Slider = () => {
  return (
    <div className="carousel w-full  h-[400px]">
      <div id="slide1" className="carousel-item relative w-full overflow-hidden">
        <img src={img2} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img5} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img6} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;

// import React from "react";
// import img1 from "../assets/01.jfif";
// import img2 from "../assets/02.jfif";
// import img3 from "../assets/03.jfif";
// import img4 from "../assets/04.jfif";
// import img5 from "../assets/05.jfif";
// import img6 from "../assets/06.jfif";
// const Slider = () => {
//   return (
//     <div className="grid grid-cols-6 gap-3">
//       <img className="w-full h-[200px]" src={img1} alt="" />
//       <img className="w-full h-[200px]" src={img2} alt="" />
//       <img className="w-full h-[200px]" src={img3} alt="" />
//       <img className="w-full h-[200px]" src={img4} alt="" />
//       <img className="w-full h-[200px]" src={img5} alt="" />
//       <img className="w-full h-[200px]" src={img6} alt="" />
//     </div>
//   );
// };

// export default Slider;
