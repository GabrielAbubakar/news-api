import React from 'react'
import './NewsItem.css'

const NewsItem = ({ title, publisher, content, link }) => {

    return (
        <div className='news__item'>
            <h3>{title}</h3>
            <p id='publisher'>{publisher}</p>
            <p id='content'>
                {content}
            </p>
            <a href={link} target="_blank">Read More</a>
        </div>
    )
}


export default NewsItem;
