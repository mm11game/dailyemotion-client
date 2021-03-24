import React, { useState } from "react";
import { emojis } from "../dummydata/deleteDummy.js"; //이 부분을 API로 불러와야한다.
import DeleteItems from "./DeleteItems.js";
import styles from "../css/Delete.module.css";
//완전히 지우는건 finalDelete

const axios = require("axios");
axios.defaults.withCredentials = true;

const Delete = () => {
  const [RenderEmojis, setRenderEmojis] = useState(emojis); //랜던하는것은 emotion_count가 0을 초과하는것만 보여준다.
  const [checkedEmo, setCheckedEmo] = useState([]); //이 부분은 api로 가져온 값을 배열로해서 넣어줘야할 거 같다. 얘 모양은 [2,3,5] 이런식이다.
  //또한 비우기를 누르면? checkedEmo에 들어간 부분만 db에서 지운다.
  //또한 지우면서 emotion_count를 줄여야한다.

  const handleCheckChange = (checked, id) => {
    if (checked) {
      setCheckedEmo([...checkedEmo, id]);
    } else {
      setCheckedEmo(checkedEmo.filter((el) => el !== id));
    }
  };

  const handleErase = () => {
    //비우기를 누르게 되면? checkedEmo에 있는 값을 제외하고, count도 내려주고, 그 다음에 보여주는건 지우고 난 다음의 emoji들
    const rendering = RenderEmojis.filter((emoji) => {
      return checkedEmo.indexOf(emoji.id) === -1;
    });
    //checkedEmo에서 [4,5]값들은 db에서 지워줘야하고, 또한 지울때마다 그 emotion id값에 맞춰서 emotion count를 줄여줘야한다.
    setRenderEmojis(rendering);
    console.log("체크된 Emo", checkedEmo);
    //다 하고 나면? checkedEmo를 초기화시킨다
    axios.post("https://localhost:5000/text/finalDelete", {
      text_id: checkedEmo,
    });
    //마지막에 checkEmo를 []로 만들어준다
    setCheckedEmo([]);
  };
  const handleAllCheck = (checked) => {
    if (checked) {
      setCheckedEmo(emojis.map((emoji) => emoji.id));
    } else {
      setCheckedEmo([]);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.box}>
        <h3 className={styles.h3}>감정 쓰레기통</h3>
        <div className={styles.header}>
          <div className={styles.check}>
            <input
              name="check"
              type="checkbox"
              onChange={(e) => {
                handleAllCheck(e.target.checked);
              }}
              checked={checkedEmo.length === emojis.length ? true : false}
            ></input>
            <label for="check">전체선택</label>
          </div>

          <button className={styles.button} onClick={handleErase}>
            비우기
          </button>
        </div>

        <div className={styles.emojis}>
          {RenderEmojis.map((emoji) => {
            return (
              <DeleteItems
                key={emoji.id}
                checkedEmo={checkedEmo}
                emoji={emoji}
                handleCheckChange={handleCheckChange}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Delete;

//각각의 고유값은 123456~이지만, key값 즉 emoji.id는 같은값이 존재한다.
//이걸 지우기 위해서는?
