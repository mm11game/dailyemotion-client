import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ListItem from "../components/ListItems";
import "../css/List.css";
const axios = require("axios");

axios.defaults.withCredentials = true;

//리스트에서 get을 받아서 그 값을 App으로 올려주고, 그 다음에 setItems로 그걸 받아서 변경

export default function List() {
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  useEffect(() => {
    axios.get("https://localhost:5000/text/textList").then((res) => {
      setItems(res.data.data);
      console.log("텍스트/텍스트리스에서 get해온값", res.data.data);
    });
  }, []);

  const [items, setItems] = useState([]); //items = []
  const [filter, setFilter] = useState("all"); //필터에는 월이 들어가게 된다.
  const [modalStatus, setModalStatus] = useState(false); //이게 true이면 월 목록을 보여준다.

  const removeItem = (item) => {
    setItems(items.filter((el) => el.id !== item.id));

    axios.post("https://localhost:5000/text/goToGarbage", {
      text_id: item.id,
      text_status: item.text_status,
    });
  };

  const handleDeleteAndGoToGarbage = (itemId) => {
    removeItem(itemId);
  };

  return (
    <div className="list-box">
      <h1 className="title">감정 기록 리스트 </h1>
      {/* <div>
        <i class="fas fa-trash" onClick={() => history.push("/delete")}></i>
      </div> */}

      <div>
        <i
          class="far fa-calendar-alt"
          onClick={() => setModalStatus(!modalStatus)}
        ></i>
        {modalStatus && (
          <ul className="list-months">
            {months.map((month) => (
              <li className="month" onClick={() => setFilter(month)}>
                {month}월
              </li>
            ))}
          </ul>
        )}
      </div>
      {filter !== "all" && (
        <span>
          <i class="fas fa-undo" onClick={() => setFilter("all")}></i>
        </span>
      )}
      <ul id="list">
        {items
          .filter((item) => {
            if (filter !== "all") {
              return item.date.slice(5, 7) === filter;
            } else {
              return item;
            }
          })
          .map((item, key) => (
            <ListItem
              key={key}
              item={item}
              handleDeleteAndGoToGarbage={handleDeleteAndGoToGarbage}
            />
          ))}
      </ul>
    </div>
  );
}

//일단 달력의 월의 값과 같은 값이 나온 것만 filter를 사용해서 추려낸다음에 , 그 이후에 map으로 그 list를 뿌려준다.
