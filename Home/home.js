import Link from 'next/link'
import React from 'react'
import Allw from '../stylesW/AllW'
import { AiOutlineHome } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BsInfoSquare } from "react-icons/bs";



const data2=[
    {hrefs:"Users",hrefs2:"users",fw:<AiOutlineHome/>},
    {hrefs:"Todos",hrefs2:"todos",fw:<FiUsers/>},
    {hrefs:"Info",hrefs2:"info",fw:<HiOutlinePhotograph/>},
    {hrefs:"Photos",hrefs2:"photos",fw:<BsInfoSquare/>}
]

const home = () => {
    return (
        <Allw>
           <div className='homemain'>
               <h1 className='text-center'>Home</h1>
               <h3 className='text-center mb-3'>Main page</h3>
                <div className="c">
                <div className="row">
                {data2.map((v,i)=>{
                    return  <div className="col-lg-3 col-md-6 col-sm-12">
                    <Link href={v.hrefs2}>
                    <div className='bigrasmramka'>
                       <div className='bgr'>
                       <div className='rasmramka'>
                        <p className='fs-2'>{v.fw}</p>             
                        </div>
                       </div>
                        <p className='text-center mt-3 mb-2 p-1'>{v.hrefs}</p>
                        
                    </div></Link>
                </div>
                })}
              
            </div>
                </div>
           </div>

        </Allw>
    )
}

export default home
