import React, { useState } from 'react';
import '../css/Slider.css';
import { images } from './SliderData';
const Slider = () => {
  const [currImg, setCurrImg] = useState(0)
  return (
    <div className="App"> 
      <div className="slider">
        <div 
          className="sliderInner"
          style={{ backgroundImage:`url(${images[currImg].img})`}}
          >
            <div 
              className="left" 
              onClick={() => {
                currImg > 0 && setCurrImg(currImg - 1)
              }}
            >
              <i class="fas fa-angle-left"></i>
            </div>
            <div className="center">
              {/* <h1 className="imgTitle">{images[currImg].title}</h1> */}
              {/* <p className="subtitle">{images[currImg].subtitle}</p> */}
            </div>
            <div 
              className="right"
              onClick={() => {
                currImg < images.length - 1 && setCurrImg(currImg + 1)
              }}            
            >
              <i class="fas fa-angle-right"></i>
            </div>
         </div>
      </div>
    </div>
  )
}
export default Slider
