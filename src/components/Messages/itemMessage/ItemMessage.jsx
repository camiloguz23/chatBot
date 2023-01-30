import React from 'react'
import "./itemMessage.scss"

const ItemMessage = ({item}) => {
  return (
    <div className='containerItem'>
        <div className={`bodyMessage ${item?.isUser && "user"}`}>
          { item?.isUser || <i className={`material-symbols-outlined`}>smart_toy</i>}
            <span className={item?.isUser ? 'userText':'robot'}>{item?.text}</span>
        </div>
    </div>
  )
}

export default ItemMessage