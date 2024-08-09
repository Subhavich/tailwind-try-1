import { useState } from "react";
import ExpandCard from "../components/ExpandCard/ExpandCard";
import DropdownCard from "../components/DropdownCard";

// heroText => impact 2x sentences
// customer => company and person

export default function TwCardsPage() {
  return (
    <>
      <div className="grid grid-cols-autoFit260 justify-items-center	 grid-rows-row550">
        <ExpandCard
          backdropImage={"https://picsum.photos/300"}
          customer={"Kerr Rinner"}
          heroImage={"https://picsum.photos/80"}
          heroText={"How B2B SaaS manages to be on TNT and feedback Zapie"}
          subtitle={"About Company"}
          textArray={[
            "10-20 employees",
            "Medical Device Importer",
            "Developed scheduling application for medical personnel",
            "Saved 20-30% of personnel time",
          ]}
          imageArray={[
            "https://picsum.photos/20",
            "https://picsum.photos/21",
            "https://picsum.photos/22",
          ]}
        />
        <ExpandCard
          backdropImage={"https://picsum.photos/300"}
          customer={"Kerr Rinner"}
          heroImage={"https://picsum.photos/80"}
          heroText={"How B2B SaaS manages to be on TNT and feedback Zapie"}
          subtitle={"About Company"}
          textArray={[
            "10-20 employees",
            "Medical Device Importer",
            "Developed scheduling application for medical personnel",
            "Saved 20-30% of personnel time",
          ]}
          imageArray={[
            "https://picsum.photos/20",
            "https://picsum.photos/21",
            "https://picsum.photos/22",
          ]}
        />
        <ExpandCard
          backdropImage={"https://picsum.photos/300"}
          customer={"Kerr Rinner"}
          heroImage={"https://picsum.photos/80"}
          heroText={"How B2B SaaS manages to be on TNT and feedback Zapie"}
          subtitle={"About Company"}
          textArray={[
            "10-20 employees",
            "Medical Device Importer",
            "Developed scheduling application for medical personnel",
            "Saved 20-30% of personnel time",
          ]}
          imageArray={[
            "https://picsum.photos/20",
            "https://picsum.photos/21",
            "https://picsum.photos/22",
          ]}
        />
      </div>
    </>
  );
}
