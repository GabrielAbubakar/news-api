import React from 'react'
import { useState, useEffect } from 'react'
import NewsItem from '../NewsItem/NewsItem'
import './NewsList.css'

const NewsList = () => {

    const [articles, setArticle] = useState([])
    const [input, setInput] = useState('')
    const [err, setErr] = useState(false)

    const fetchTop = () => {
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=6ea87ed04721473ab9ab4ebd3662fe22')
            .then(res => res.json())
            .then(data => {
                setArticle(data.articles)
            })
    }

    const fetchData = (e) => {
        e.preventDefault()
        fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=6ea87ed04721473ab9ab4ebd3662fe22`)
            .then(res => res.json())
            .then(data => {
                setArticle(data.articles)
            })
            .catch((error) => {
                setErr(true)
                setArticle([])
            });
    }

    const buttonFetch = (e) => {
        fetch(`https://newsapi.org/v2/everything?q=${e.target.id}&apiKey=6ea87ed04721473ab9ab4ebd3662fe22`)
            .then(res => res.json())
            .then(data => {
                setArticle(data.articles)
                console.log(data.articles[1]);
            })
            .catch((error) => {
                setErr(true)
                setArticle([])
            });
    }



    useEffect(() => {
        fetchTop()
    }, [])


    return (

        <div className='news__list'>

            <div className="header-text">
                <h1>News Search App🔎</h1>
                <p>Finding top stories from anywhere in the world🌐</p>
            </div>

            <form onSubmit={fetchData} className='input__form'>
                <input placeholder='Input your search keyword here'
                    type="text" label="Search User"
                    value={input}
                    onChange={e => setInput(e.target.value.toLowerCase())}
                />
                <button>Search</button>
            </form>

            <div className="topics__container">
                <h2>Hot Trending Topics🔥🔥</h2>
                <div className="tabs__list">
                    <button id='tech' onClick={buttonFetch} >Tech</button>
                    <button id='business' onClick={buttonFetch} >Business</button>
                    <button id='bitcoin' onClick={buttonFetch} >Bitcoin</button>
                    <button id='ukraine' onClick={buttonFetch} >Ukraine</button>
                </div>
            </div>




            {articles && (
                <div className='articles__container'>
                    <h2>Search/Top Results:</h2>
                    {err && (
                        <div className='error'>
                            <p>An Error Occured (Please check your internet connection or retry your keyword)</p>
                        </div>
                    )}
                    <ul>
                        {articles.map((article, i) => (

                            <NewsItem title={article.title}
                                key={article.title}
                                publisher={article.author}
                                content={article.description}
                                link={article.url}
                                index={i}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}


export default NewsList;
