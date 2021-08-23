import React, { useState } from 'react'
import Footer from './foot'
import Allw from '../stylesW/AllW'
import Link from 'next/link'
import { AiOutlineCreditCard ,AiOutlineUnorderedList,AiOutlineArrowUp} from "react-icons/ai";
import { FiTrendingUp } from "react-icons/fi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BsInfoSquare } from "react-icons/bs";
import { GrDocument } from "react-icons/gr";
import { GiSportMedal } from "react-icons/gi";


import { useSelector } from 'react-redux';
import { Slide } from 'react-awesome-reveal';



const links=[
    {href:'', icons:<FiTrendingUp/>, components:"Overview"},
    {href:'transactions', icons:<AiOutlineUnorderedList/>, components:"Transactions"},
    {href:'cards', icons:<AiOutlineCreditCard/>, components:"Cards"},
    {href:'invoices', icons:<GrDocument/>, components:"Invoices"},
    {href:'goals', icons:<GiSportMedal/>, components:"Goals"},

]




const All = ({children}) => {

    const [isShow, setIsShow] = useState(true);

    const Changing=()=>{
        setIsShow(!isShow);
    }

    return (
        <Allw>
           <div className='dh'>

           <div className={isShow && "dashboard" || "dashboard3 w-100"}>
               <div className='uls'>
                   <p className='dashboardWord'>Dashboards</p>
                   <div className='cloudCash'><img src="./Vector.png" alt="" /><span className='cc ms-1'>cloudcash</span></div>
                   <div className='sideBar'>
                   <ul>
                       <li className='d-flex justify-content-center'><button className='btn btn-light' onClick={()=>Changing()}>sm</button></li>
                       {links.map((v,i)=>{
                           return  <li key={i}><Slide  delay={i*50}><Link href={`/${v.href}`}><div className='links'><div className='icons'>
                           {v.icons}</div><span className={isShow && "components" || "d-none"}>{v.components}</span></div></Link></Slide></li>
                       })}
                    </ul>
                   </div>
                </div> 
                <div className='bbtn'>
                    <p className='giveY'>Give your money
                        awesome space in cloud
                    </p>
                    <div className='d-flex justify-content-center'>
                        <Link href='/upgrade'><button className='btn btn-warning m-1'><span className='buttonUchun'>Upgrade to premium</span> <AiOutlineArrowUp/></button></Link>
                    </div>
                </div>  
           </div>

            {/* head qismi */}
                <div className='head'>
                {children}
                </div>
            </div>

            {/* footer qismi */}
            <Footer></Footer>
            
        </Allw>
    )
}

export default All