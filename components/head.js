import React from 'react'
import Allw from '../stylesW/AllW'
import { BsList } from "react-icons/bs";



const head = () => {
   
    return (
        <Allw>
           
            <div className='heads'>
            <button className='btn btn-light'><BsList/></button>
                <ul>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Users</a></li>
                    <li><a href="#">Photos</a></li>
                    <li><a href="#">info</a></li>
                </ul>
            </div>
        </Allw>
    )
}

export default head
