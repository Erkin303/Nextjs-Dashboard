import React from 'react'
import Header from './head'
import Footer from './foot'
import Allw from '../stylesW/AllW'
import styled from 'styled-components'
import Link from 'next/link'
import { AiOutlineHome } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BsInfoSquare } from "react-icons/bs";








const all = ({children}) => {
    return (
        <Allw>
           <div className='dh'>
           <div className='dashboard'>
               <div className='uls'>
                   <ul>
                       <li><Link href="/"><div className='links'><AiOutlineHome/> Home</div></Link></li>
                       <li> <Link href="/users"><div className='links'><FiUsers/> Users</div></Link></li>
                       <li><Link href="/photo"><div className='links'><HiOutlinePhotograph/> Photo</div></Link></li>
                       <li><Link href="/info"><div className='links'><BsInfoSquare/> Info</div></Link></li>
                </ul>
            
            </div>
          
                
           </div>
           <div className='head'>
           <Header></Header>
           {children}
           </div>
           </div>

         

            <Footer></Footer>
            
        </Allw>
    )
}

export default all
