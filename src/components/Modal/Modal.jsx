import { animate, AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";
import ModalBlock from "./ModalBlock";
import CardLogo from "../ExpandCard/CardLogo";

export default function Modal({
  modalOpen,
  setModalOpen,
  subtitle,
  heroText,
  heroImage,
  textArray,
  imageArray,
  customer,
  projectImage,
  projectBackground,
}) {
  return (
    <AnimatePresence>
      {modalOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setModalOpen(false)}
          className="  backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className=" bg-white text-white rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden "
          >
            <div className=" min-h-96 p-4 text-zinc-50">
              <div className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4">
                {/* Event Image */}
                <ModalBlock className="col-span-12 row-span-2 p-0">
                  <img
                    className="w-full max-h-72 object-cover"
                    src={projectImage}
                  />
                </ModalBlock>
                {/* Hero Text */}
                <ModalBlock className="  col-span-12 font-semibold md:text-left text-xl text-white md:col-span-8">
                  <p className="leading-relaxed line-clamp-2">{heroText}</p>
                </ModalBlock>
                {/* TechStack */}
                <ModalBlock className="col-span-12 flex md:grid md:grid-cols-2 md:grid-rows-2 justify-center gap-16 md:gap-4 place-items-center text-white md:col-span-4">
                  {imageArray.map((link) => {
                    return (
                      <img
                        src={link}
                        className="size-12 rounded-sm md:col-span-1 md:size-8 "
                      />
                    );
                  })}
                </ModalBlock>
                {/* Client */}
                <ModalBlock className="flex col-span-12 sm:col-span-6 p-2">
                  <div className="w-full gap-2 p-4 grid grid-cols-4 grid-rows-2 place-items-center items-center">
                    <img
                      className=" object-contain h-full col-span-4 row-span-2 rounded-lg"
                      src={heroImage}
                      // src="https://png.pngtree.com/png-vector/20230905/ourmid/pngtree-real-sign-with-green-letters-sky-png-image_9943516.png"
                    />
                    <p className="font-bold text-lg col-span-4">Investor</p>
                    <p className="font-semibold text-lg col-span-4">
                      Vincent Kompany
                    </p>
                  </div>
                </ModalBlock>
                {/* Writing */}
                <ModalBlock className=" grid items-center sm:col-span-6 col-span-12 p-2">
                  <p className="text-base p-4 sm:text-sm md:text-base">
                    {projectBackground}
                  </p>
                </ModalBlock>
              </div>
              <h5 className="w-full font-semibold text-zinc-800 text-xl mt-4 ">
                {subtitle}
              </h5>
              <button
                onClick={() => setModalOpen(false)}
                className="mt-4 bg-transparent border p-6 border-zinc-700 hover:bg-zinc-700 hover:text-white transition-colors text-zinc-700 font-semibold w-full py-2 rounded"
              >
                Back to Projects 🚀
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <></>
      )}
    </AnimatePresence>
  );
}
