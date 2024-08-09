import { useState } from "react";
import ExpandCard from "../components/ExpandCard/ExpandCard";
import DropdownCard from "../components/DropdownCard";

// heroText => impact 2x sentences
// customer => company and person

export default function TwCardsPage() {
  return (
    <>
      <div className="grid grid-cols-autoFit260 justify-items-center grid-rows-row550">
        <ExpandCard
          backdropImage={"https://picsum.photos/300"}
          customer={"Kerr Rinner"}
          heroImage={"https://picsum.photos/230"}
          heroText={"Two Sentences of Impacts, Impacts in two sentences"}
          subtitle={"Funding Amount in THB"}
          textArray={[
            "Company Size 10-20 employees",
            "Medical Device Importer",
            "Developed scheduling application for medical personnel",
            "Saved 20-30% of personnel time",
          ]}
          imageArray={[
            "https://picsum.photos/45",
            "https://picsum.photos/58",
            "https://picsum.photos/46",
          ]}
          projectImage={"https://picsum.photos/345"}
          projectBackground={
            "เยอบีร่าการันตี สหรัฐเก๊ะซ้อ สันทนาการ เที่ยงคืน วอล์คน็อกไอซ์วิลเลจบูม หน่อมแน้ม วันเวย์แฮปปี้ โปรเจ็คท์ ฮองเฮาออร์แกนอาร์ติสต์เฉิ่มวอเตอร์ ไวกิ้งพอเพียงช็อปเปอร์กีวี แทงโก้มาร์ชซีนแพลนโอเปอเรเตอร์ แคมป์นิวธุรกรรม แอร์อุตสาหการ มั้ง เจลเวิร์ลด์คอร์ปอเรชั่น คัตเอาต์ปิยมิตรแพนด้า"
          }
        />
      </div>
    </>
  );
}
