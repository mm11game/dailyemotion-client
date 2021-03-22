import React, { useState } from "react";
import Mood from "./Mood";
import styles from "../css/MainPage.module.css";
import { emojis } from "../dummydata/dummy.js";

// emojis = {
//   [
//     id: 1,
//     emotion_image: 1,
//     emotion_content: "행복",
//   ],
// } 이런 이모지의 emotion_image가 숫자1로 들어오게 되면? 나는 랜더링은 angry를 해주어야한다.

const axios = require("axios");
axios.defaults.withCredentials = true;
//행복 슬픔 걱정 분노 우울 설렘

const MainPage = () => {
  const [text, setText] = useState("");
  const [clickEmoji, setClickEmoji] = useState(false);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  //이모지를 클릭하면? 그 객체값을 가져와야한다?

  const getEmojiState = (id) => {
    setClickEmoji(id);
  };
  const handleButtonClick = () => {
    console.log("메인페이지 21번줄", clickEmoji, text);
    //클릭된 즉 이모지상태가 true인것의 id값과 여기 text값을 날려줘야한다.
    //만약 clickEmoji가 false가 아니고, text가 ""이 아닐때만 포스트를 해준다.
    axios
      .post("https://projectb1.com/text/record", {
        textcontent: text,
        emotionId: clickEmoji,
      })
      .then();
  };

  return (
    <div className={styles.body}>
      <div className={styles.box}>
        <h3>오늘의 감정을 선택해보세요</h3>
        <div className={styles.emojis}>
          {emojis.map((emoji) => (
            <Mood
              key={emoji.id}
              emoji={emoji}
              emojiImg={emoji.emotion_image}
              emojiName={emoji.emotion_content}
              getEmojiState={getEmojiState}
            />
          ))}
        </div>
        <textarea
          className={styles.input}
          name="text"
          onChange={handleChange}
          value={text}
          placeholder="즐겁고 따뜻한 하루였어!"
        ></textarea>
        <br></br>
        <button className={styles.button} onClick={handleButtonClick}>
          기록하기
        </button>
      </div>
    </div>
  );
};

export default MainPage;
