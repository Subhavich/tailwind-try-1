import ExpandCard from "../components/ExpandCard/ExpandCard";
import Slider from "../components/Carousel/Carousel";
// heroText => impact 2x sentences
// customer => company and person
import projectData from "../projectData";
export default function HomePage() {
  return (
    <>
      <div className="border pb-8 grid grid-cols-autoFit260 justify-items-center auto-rows-min sm:auto-rows-autoRow550 ">
        {projectData.map((project) => {
          return <ExpandCard {...project} />;
        })}
      </div>
      <Slider projectData={projectData} />
    </>
  );
}
