import React from 'react'
import NewsList from './components/NewsList/NewsList'
import './App.css'
import Help from './components/help/help'

const App = () => {
    return (
        <div className='container'>

            <Help />
            <NewsList />

        </div>
    )
}


export default App
