import React, { useState, useContext } from 'react';

import styled from "styled-components";

import ListItem from '../components/ListItems';
import { AppContext, EditContext, garbageContext } from '../App';
import '../css/List.css';


export default function List(){
  const {items, removeItem}= useContext(AppContext)


  const handleDeleteAndGoToGarbage =(itemId) => {
    removeItem(itemId)    
  }

  

  const months = ["01","02","03","04","05","06","07","08","09","10","11","12"]

  const [filter, setFilter] = useState('all')

  const [modalStatus, setModalStatus] = useState(false);

  return (
    <div className="box">
    {/* <div className="app-wrapper"></div> */}
      <div>
        <h2 className="title"> 💖 기록한 감정을 확인해 보세요.</h2>
      </div>
      <form className="form-wrapper"></form>
      <div >
        <i class="far fa-calendar-alt"  
        onClick={() => setModalStatus(!modalStatus)}>   
        </i>
        {/* <button className="btn-month" onClick={() => setModalStatus(!modalStatus)}>월간</button> */}
        {modalStatus && 
        <ul className='list-months'>
         {months.map(month => 
         <li className="month" onClick={() => setFilter(month)}>{month} 월</li>)}
        </ul>}
      </div>
      {filter !== 'all' && <span><button className="reset" onClick={() => setFilter('all')}>RESET</button></span>}
      <ul id="list">
        {items.filter((item => {
          if(filter !== 'all') {
            return item.date.slice(5, 7) === filter
          } else {
            return item
          }
        })).map((item, key) =>
            <ListItem key={key} item={item} handleDeleteAndGoToGarbage={handleDeleteAndGoToGarbage}  />)}
      </ul>
    </div>
  )
}