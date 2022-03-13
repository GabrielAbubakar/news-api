import React from 'react'
import './NewsItem.css'
import { motion } from 'framer-motion'

const NewsItem = ({ title, publisher, content, link, index }) => {

    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .8, delay: index * 0.2 }}
            className='news__item'>

            <h3>{title}</h3>
            <p id='publisher'>{publisher}</p>
            <p id='content'>
                {content}
            </p>
            <a href={link} target="_blank">Read More</a>
        </motion.div>
    )
}


export default NewsItem;
