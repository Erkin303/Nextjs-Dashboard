import Link from 'next/link'
import React from 'react'
import Allw from '../stylesW/AllW'



const data2=[
    {hrefs:"users",fw:"sdfsd"},
    {hrefs:"todos",fw:"sdfsd"},
    {hrefs:"inf",fw:"sdfsd"},
    {hrefs:"photos",fw:"sdfsd"}
]

const home = () => {
    return (
        <Allw>
           <div className='homemain'>
                <div className="row">
                {data2.map((v,i)=>{
                    return  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div>
                        <div>
                            <p>{v.hrefs}</p>
                        </div>
                        <p>{v.fw}</p>
                    </div>
                </div>
                })}
              
            </div>
           </div>

             <h1>Salom world</h1>
       <Link href="/users"><button className='btn btn-primary text-center'>Users</button></Link>
        </Allw>
    )
}

export default home
