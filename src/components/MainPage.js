import React, { useState, useCallback } from "react";
import Mood from "./Mood";
import {
  withRouter,
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory,
} from "react-router-dom";
import "../css/MainPage.css";
import { emojis } from "../dummydata/dummy.js";
import swal from "sweetalert";

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
    console.log("겟이모지 스테이츠", id);
    console.log("클릭된 이모지", clickEmoji);
  };

  const handleButtonClick = () => {
    console.log("메인페이지 21번줄", clickEmoji, text);
    //클릭된 즉 이모지상태가 true인것의 id값과 여기 text값을 날려줘야한다.
    //만약 clickEmoji가 false가 아니고, text가 ""이 아닐때만 포스트를 해준다.
    axios
      .post("https://localhost:5000/text/textRecord", {
        textContent: text,
        emotionId: clickEmoji,
      })
      .then((res) => {
        console.log("받은데이터", res);
        swal({
          title: "Good job!",
          text: "당신의 하루가 기록되었습니다.",
          icon: "success",
        });
        setText("");
      });
  };

  return (
    <div className="body">
      <div className="box">
        <h3 className="title">💖 오늘의 감정은 어떠셨나요?</h3>
        <div className="emojis">
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
          className="input-area"
          name="text"
          onChange={handleChange}
          value={text}
          placeholder="오늘 하루의 감정을 글로 남겨 보세요!"
        ></textarea>
        <br></br>
        <button className="btn-singup" onClick={handleButtonClick}>
          기록하기
        </button>
      </div>
    </div>
  );
};

export default MainPage;
