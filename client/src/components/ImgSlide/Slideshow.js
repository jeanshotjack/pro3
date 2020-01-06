import React from "react";
import { Fade } from 'react-slideshow-image';


const fadeImages = [
  "https://i.ibb.co/348t1sk/1grouppic.jpg", 
  "https://i.ibb.co/x8cJJfB/3-group-pic.jpg",
  "https://i.ibb.co/br9pD2b/5-group-pic.png",
  "https://i.ibb.co/P1TVQtj/6-group-pic.jpg",
  "https://i.ibb.co/L6kH5By/7-group-pic.jpg"
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 800,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container" >
            <img src={fadeImages[0]} height="500" width="500"  />
          </div>

        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} height="500" width="500"/>
          </div>

        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} height="500" width="500"/>
          </div>

        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} height="500" width="500"/>
          </div>

        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[4]} height="500" width="500"/>
          </div>

        </div>
      </Fade>
    </div>
  )
}

export default Slideshow;
