import React from "react";
import "../css/ListItems.css";
import RenderImg from "./RenderImg";

export default function ListItems({ item, handleDeleteAndGoToGarbage }) {
  return (
    <div className="body">
      <li className="list-item-body">
        <div className="list-item-thumbnail"></div>
        <div className="list-item-info">
          <img
            className="list-item-logokiun"
            src={RenderImg(item.emotionlist_id)}
          />
          <i
            class="fas fa-trash"
            onClick={() => {
              handleDeleteAndGoToGarbage(item);
            }}
          ></i>
          <div className="list-item-text">{item.text_content}</div>
          <div className="list-item-date">{item.date}</div>
        </div>
        {/* <button className="btn-delete" onClick={() => { handleDelete(item.id) }}>삭제</button> */}
        {/* <button className="btn-edit">편집</button> */}
      </li>
    </div>
  );
}
