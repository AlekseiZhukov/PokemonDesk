import React from 'react';
import css from './App.modules.scss'
import cn from 'classnames'

const App = () => {
    return (
        <div className={cn(css.header , css.color)}>
            Hi! This is App Component!
        </div>
    )
}

export default App;