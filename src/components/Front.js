import React from 'react'
import {Link} from 'react-router-dom'
import img from '../assets/images/back.webp'
import Button from '@material-ui/core/Button';

const Front = () => {
    return (
        <div className="front-container">
                <img src={img}/>
                <h1>Organize it all with TodoList</h1>
                <Link to="/todo" className="color button-link">Get Started</Link>
               
                   
        </div>
    )
}

export default Front
