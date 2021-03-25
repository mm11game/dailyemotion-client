import React, { useState, useContext } from 'react';

import { useHistory } from 'react-router-dom';

import ListItem from '../components/ListItems';
import { AppContext, EditContext, garbageContext } from '../App';
import '../css/List.css';



export default function List({ items, removeItem }){
  

  const handleDeleteAndGoToGarbage =(itemId) => {
    removeItem(itemId)    
  }

  const months = ["01","02","03","04","05","06","07","08","09","10","11","12"]

  const [filter, setFilter] = useState('all')

  const [modalStatus, setModalStatus] = useState(false);

  const history = useHistory();

  return (
    <div>
      <h1>감정 기록</h1>
      <div>
        <i class="fas fa-trash" onClick={()=> history.push('/delete')}></i>
      </div>
      <div >
        <i class="far fa-calendar-alt"  onClick={() => setModalStatus(!modalStatus)}></i>
        {modalStatus && <ul className='list-months'>
         {months.map(month => <li className="month" onClick={() => setFilter(month)}>{month} 월</li>)}
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