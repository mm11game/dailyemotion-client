import React, { useState } from "react";
import "../css/Mood.css";
import RenderImg from "./RenderImg";

const Mood = ({ getEmojiState, emoji }) => {
  // console.log("프롭스", emoji, emojiName);
  // const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    // setClicked(!clicked)
    getEmojiState(e.target.id);
    console.log("타겟의 아이디", e.target.id);
  };
  //만약에 emojiImg의 값이 특정숫자라면, 그것에 맞춰서 emojiImg에는 다른 값을 랜더링을 해주게 만들어주어야한다.
  //emojiImg === Icons의 Img가 같으면 Icons의 이미지를 출력한다

  return (
    <button className="boxNo" onClick={handleClick} id={emoji.id}>
      <img className="emojiImg" src={RenderImg(emoji.emotion_image)}></img>
      {emoji.emotion_content}
    </button>
  );
};
// src부분에 Rendering(emoji.emoition_image)를 넣으면 된다.
export default Mood;
