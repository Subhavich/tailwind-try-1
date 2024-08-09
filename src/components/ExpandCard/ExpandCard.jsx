import { useState } from "react";
import ChevronSVG from "./ChevronSVG";
import CardH4 from "./CardH4";
import CardH5 from "./CardH5";
import CardLogo from "./CardLogo";
import CardHero from "./CardHero";
import CardButton from "./CardButton";
import CardHeroImage from "./CardHeroImage";
import CardBackdrop from "./CardBackdrop";
import Modal from "../Modal/Modal";

export default function ExpandCard(props) {
  const {
    backdropImage,
    heroText,
    heroImage,
    subtitle,
    textArray,
    imageArray,
    customer,
    projectImage,
    projectBackground,
  } = props;
  const [shownCard, setShownCard] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const conditionalContentClass =
    "px-6 pb-6 rounded-b-lg animate-slideIn mt-4 text-sm font-semibold bg-white text-left box-border max-w-60 w-full ";
  const conditionalContent = shownCard ? (
    // Project informations (on card mouseenter)
    <>
      <div className={`${conditionalContentClass} shadow `}>
        <CardH4 text={subtitle} />
        {textArray.map((text) => (
          <CardH5 text={text} />
        ))}
        <CardH4 text="Technology" />
        <div className="flex w-full justify-start">
          {imageArray.map((img) => {
            return <CardLogo link={img} />;
          })}
        </div>
        {/* Button */}
        <CardButton setModalOpen={setModalOpen} text={"Learn more"} />
      </div>
    </>
  ) : (
    // Chevron SVG (on card mouseout)
    <div className={`${conditionalContentClass} text-gray-400 `}>
      <ChevronSVG />
    </div>
  );
  // Rendering
  return (
    <>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} {...props} />
      <div
        onClick={() => setModalOpen(true)}
        onMouseEnter={() => setShownCard(true)}
        onMouseLeave={() => setShownCard(false)}
        className={
          "cursor-pointer hover:z-40 mt-8 box-content w-full max-w-60 border border-gray-200 rounded-lg shadow"
        }
      >
        {/* picture */}
        <CardBackdrop link={backdropImage} />
        {/* backdrop */}
        <div className="absolute -z-20 w-60 h-60 bg-gradient-to-t from-white opacity-95 "></div>
        {/* container */}
        <div className="py-8 px-6 ">
          <CardHeroImage link={heroImage} />
          {/* main text */}
          <CardHero text={heroText} />
          {/* customer section */}
          <div className="text-left w-full">
            <h6 className="font-bold">{customer}</h6>
            <p>Customer Story</p>
          </div>
        </div>
        {conditionalContent}
      </div>
    </>
  );
}
