import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./CarouselCard";
import CarouselCardLight from "./CarouselCardLight";
export default function Slider({ projectData }) {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const {} = projectData;
  return (
    <>
      <div className="mt-8  ">
        <Slide {...settings}>
          {projectData.map((project) => {
            return <CarouselCard project={project} />;
          })}
        </Slide>
      </div>
      <div className="mt-8  ">
        <Slide {...settings}>
          {projectData.map((project) => {
            return <CarouselCardLight project={project} />;
          })}
        </Slide>
      </div>
    </>
  );
}
