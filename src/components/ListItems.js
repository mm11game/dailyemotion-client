import React from "react";
import "../css/ListItems.css";
import RenderImg from "./RenderImg";

export default function ListItems({ item, handleDeleteAndGoToGarbage }) {
  return (
    <div className="body">
      <li className="list-item-body">
        <div className="list-item-thumbnail">
          <img src={RenderImg(item.emotionlist_id)} />
        </div>
        <div className="list-item-info">
          <button
            className="btn-delete"
            onClick={() => {
              handleDeleteAndGoToGarbage(item);
            }}
          >
            삭제
          </button>
          <div className="list-item-text">{item.text_content}</div>
          <span className="list-item-date">{item.date}</span>
        </div>
        {/* <button className="btn-delete" onClick={() => { handleDelete(item.id) }}>삭제</button> */}
        {/* <button className="btn-edit">편집</button> */}
      </li>
    </div>
  );
}
