import React, { useState, useContext, useEffect } from "react";

import styled from "styled-components";

import ListItem from "../components/ListItems";
import { AppContext, EditContext, garbageContext } from "../App";
import "../css/List.css";
const axios = require("axios");
axios.defaults.withCredentials = true;
export default function List({ getItemState }) {
  const { items, removeItem } = useContext(AppContext);

  console.log("아이템스", items);
  const handleDeleteAndGoToGarbage = (itemId) => {
    removeItem(itemId);
  };
  //리스트에서 get을 받아서 그 값을 App으로 올려주고, 그 다음에 setItems로 그걸 받아서 변경

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
  const [filter, setFilter] = useState("all");
  const [modalStatus, setModalStatus] = useState(false);

  axios
    .get("https://localhost:5000/text/textList")
    .then((res) => {
      console.log("레절트값이 뭔가?", res.data.data);
      getItemState(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <h1>감정 기록</h1>
      <div>
        <i
          class="far fa-calendar-alt"
          onClick={() => setModalStatus(!modalStatus)}
        ></i>
        {/* <button className="btn-month" onClick={() => setModalStatus(!modalStatus)}>월간</button> */}
        {modalStatus && (
          <ul className="list-months">
            {months.map((month) => (
              <li className="month" onClick={() => setFilter(month)}>
                {month} 월
              </li>
            ))}
          </ul>
        )}
      </div>
      {filter !== "all" && (
        <span>
          <button className="reset" onClick={() => setFilter("all")}>
            RESET
          </button>
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
