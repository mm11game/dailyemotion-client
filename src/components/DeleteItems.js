import React, { useState } from "react";
import RenderImg from "./RenderImg";
import styles from "../css/DeleteItems.module.css";
// id: 1,
// textContent: "text",
// date: "2020/02/02",
// emotionId: "행복",
// createdAt: "created time",
// updatedAt: "updated time",
// text_status: 1,
// emotion_count: 2,

//체크한 부분만 넘겨줘서 그걸 필터링 한다
const DeleteItems = ({ emoji, handleCheckChange, checkedEmo }) => {
  return (
    <div className={styles.emojibox}>
      <div className={styles.emoji}>
        <input
          type="checkbox"
          onChange={(e) => {
            handleCheckChange(e.target.checked, emoji.id);
          }}
          checked={checkedEmo.includes(emoji.id) ? true : false}
        ></input>
        <div>
          <img
            className={styles.emojiImg}
            src={RenderImg(emoji.emotionlist_id)}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default DeleteItems;
