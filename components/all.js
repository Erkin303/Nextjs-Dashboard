import React from 'react'
import Header from './head'
import Footer from './foot'
import Allw from '../stylesW/AllW'
import Link from 'next/link'
import { AiOutlineCreditCard ,AiOutlineUnorderedList,AiOutlineArrowUp} from "react-icons/ai";
import { FiTrendingUp } from "react-icons/fi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BsInfoSquare } from "react-icons/bs";
import { GrDocument } from "react-icons/gr";
import { GiSportMedal } from "react-icons/gi";




import Vector from './../public/Vector.png'



const links=[
    {href:'', icons:<FiTrendingUp/>, components:"Overview"},
    {href:'transactions', icons:<AiOutlineUnorderedList/>, components:"Transactions"},
    {href:'cards', icons:<AiOutlineCreditCard/>, components:"Cards"},
    {href:'invoices', icons:<GrDocument/>, components:"Invoices"},
    {href:'goals', icons:<GiSportMedal/>, components:"Goals"},

]




const all = ({children}) => {
    return (
        <Allw>
           <div className='dh'>

           <div className='dashboard'>
               <div className='uls'>
                   <h2 className='text-center text-light'>Dashboards</h2>
                   <div><img src="./../public/Vector.png" alt="" /><span className='text-light text-center'>cloudcash</span></div>
                   <ul>
                       {links.map((v,i)=>{
                           return  <li key={i}><Link href={`/${v.href}`}><div className='links'><div className='icons'>
                               {v.icons}</div>{v.components}</div></Link></li>
                       })}
                    </ul>
                </div> 
                <div className='bbtn'>
                    <p>Give your money
                        awesome space in cloud
                    </p>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-warning'>Upgrade to premium <AiOutlineArrowUp/></button>

                    </div>
                </div>  
           </div>

            {/* head qismi */}
                <div className='head'>
                <Header></Header>
                {children}
                </div>
            </div>

            {/* footer qismi */}
            <Footer></Footer>
            
        </Allw>
    )
}

export default all