import { useState } from "react";
import ExpandCard from "../components/ExpandCard/ExpandCard";
import DropdownCard from "../components/DropdownCard";
import Slider from "../components/Carousel/Carousel";
// heroText => impact 2x sentences
// customer => company and person

export default function HomePage() {
  return (
    <>
      <div className="grid grid-cols-autoFit260 justify-items-center grid-rows-row550">
        <ExpandCard
          backdropImage={"https://picsum.photos/300"}
          customer={"Kim Cheval"}
          heroImage={"https://picsum.photos/232"}
          heroText={"Two Sentences of Impacts, Impacts in two sentences"}
          subtitle={"Funding Amount in THB"}
          textArray={[
            "Short project background's excerpt",
            "Not more than 5 Words",
            "Prepare data as array of excerpts",
            "2-4 items in an array",
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
        <ExpandCard
          backdropImage={"https://picsum.photos/400"}
          customer={"Carr Susan"}
          heroImage={"https://picsum.photos/230"}
          heroText={
            "Impacts to company and employees. Written in two sentences"
          }
          subtitle={"88,888 baht"}
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
          projectImage={"https://picsum.photos/365"}
          projectBackground={
            "เยอบีร่าการันตี สหรัฐเก๊ะซ้อ สันทนาการ เที่ยงคืน วอล์คน็อกไอซ์วิลเลจบูม หน่อมแน้ม วันเวย์แฮปปี้ โปรเจ็คท์ ฮองเฮาออร์แกนอาร์ติสต์เฉิ่มวอเตอร์ ไวกิ้งพอเพียงช็อปเปอร์กีวี แทงโก้มาร์ชซีนแพลนโอเปอเรเตอร์ แคมป์นิวธุรกรรม แอร์อุตสาหการ มั้ง เจลเวิร์ลด์คอร์ปอเรชั่น คัตเอาต์ปิยมิตรแพนด้า"
          }
        />
        <ExpandCard
          backdropImage={"https://picsum.photos/400"}
          customer={"Kerr Rinner"}
          heroImage={"https://picsum.photos/230"}
          heroText={"Lorem ipsum odor amet, consectetuer adipiscing elit."}
          subtitle={"250,000 baht"}
          textArray={[
            "This project has 2 excerpt",
            "Example excerpt to an array",
          ]}
          imageArray={[
            "https://picsum.photos/45",
            "https://picsum.photos/58",
            "https://picsum.photos/46",
          ]}
          projectImage={"https://picsum.photos/365"}
          projectBackground={
            "เยอบีร่าการันตี สหรัฐเก๊ะซ้อ สันทนาการ เที่ยงคืน วอล์คน็อกไอซ์วิลเลจบูม หน่อมแน้ม วันเวย์แฮปปี้ โปรเจ็คท์ ฮองเฮาออร์แกนอาร์ติสต์เฉิ่มวอเตอร์ ไวกิ้งพอเพียงช็อปเปอร์กีวี แทงโก้มาร์ชซีนแพลนโอเปอเรเตอร์ แคมป์นิวธุรกรรม แอร์อุตสาหการ มั้ง เจลเวิร์ลด์คอร์ปอเรชั่น คัตเอาต์ปิยมิตรแพนด้า"
          }
        />
      </div>
      <Slider />
    </>
  );
}
