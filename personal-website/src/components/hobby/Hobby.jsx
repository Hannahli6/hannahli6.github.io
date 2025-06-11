import React from "react";
import "./hobby.css";
import { InstagramEmbed } from "react-social-media-embed";
import SectionTitle from "../sectionTitle/SectionTitle.jsx";
import DecorDots from "../decorDots/DecorDots.jsx";

const Hobby = () => {
  const placeholderImgURLPink = "https://loading.io/assets/mod/spinner/pinkpig/lg.gif"; 
  const placeholderImgURLYellow = "https://loading.io/assets/mod/spinner/cutiefox/lg.gif"; 
  const placeholderImgURLBlue = "https://loading.io/assets/mod/spinner/bluecat/lg.gif"; 
  return (
    <div className="hobby">
      <SectionTitle section="Hobbies & Art" />
      <DecorDots colour={"deepPurple"} />
      <div
        className="artEmbeds"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <InstagramEmbed url="https://www.instagram.com/p/CgoEuXbuENk/" placeholderImageUrl = {placeholderImgURLPink}/>
        <InstagramEmbed url="https://www.instagram.com/p/CIgZN7KlJM2/" placeholderImageUrl = {placeholderImgURLYellow}/>
        <InstagramEmbed url="https://www.instagram.com/p/CNTV50TlEM2/" placeholderImageUrl = {placeholderImgURLBlue}/>
        <InstagramEmbed url="https://www.instagram.com/p/CgXvXWIPeWr/" placeholderImageUrl = {placeholderImgURLYellow}/>
      </div>
    </div>
  );
};

export default Hobby;
