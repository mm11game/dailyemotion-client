import React from 'react';
import '../css/ListItems.css';
import RenderImg from './RenderImg';


export default function ListItems({ item, handleDelete }) {
    return (
        <li className="list-item-body">
            <div className="list-item-thumbnail">
                <img src={RenderImg(item.emotionlist_id)} />
            </div>
            <div className="list-item-info">
                <div className="list-item-date" >{item.date}</div>
            <button className="btn-delete" onClick={() => { handleDelete(item.id) }}>삭제</button>

                <div className="list-item-text">{item.text_content}</div>
            </div>
        
            {/* <button className="btn-delete" onClick={() => { handleDelete(item.id) }}>삭제</button> */}
            {/* <button className="btn-edit">편집</button> */}
    </li>    
    )
}

//alt={item.name}