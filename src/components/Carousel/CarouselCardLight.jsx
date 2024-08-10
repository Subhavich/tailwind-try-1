import CardLogo from "../ExpandCard/CardLogo";
import Modal from "../Modal/Modal";
import { useState } from "react";
export default function CarouselCardLight({ project }) {
  const [modalOpen, setModalOpen] = useState(false);
  const {
    backdropImage,
    customer,
    heroImage,
    heroText,
    subtitle,
    textArray,
    imageArray,
    projectImage,
    projectBackground,
  } = project;
  return (
    <>
      <div className="my-4 grid place-items-center">
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} {...project} />
        <div
          onClick={() => setModalOpen(true)}
          className="relative cursor-pointer group space-y-4 min-h-96 w-80  text-left"
        >
          <img
            src={projectImage}
            className="transition duration-300 group group-hover:-translate-y-4 tran object-cover rounded-md w-full h-4/6"
          />
          <div className="grid grid-cols-12 space-y-2 group-hover:-translate-y-4 transition duration-300">
            <div className="col-span-12 flex">
              <CardLogo link={heroImage} />

              <p className="text-lg font-serif  text-zinc-500 border-zinc-500 ">
                {customer}
              </p>
            </div>
            <p className="col-span-12 line-clamp-2 text-lg font-semibold">
              {heroText}
            </p>
            <p className="col-span-12 line-clamp-3 text-sm leading-relaxed ">
              {" "}
              {projectBackground}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
