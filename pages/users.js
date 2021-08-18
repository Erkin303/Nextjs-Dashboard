import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from '../redux/actions';

const users = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        setUsers(dispatch);                          
   
    }, []);

    const data = useSelector(state => state.users)

    return (
        <div>
            <h1 className='text-center p-3'>Hi Users</h1>
            <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum vitae veritatis distinctio ducimus minima voluptates reprehenderit facilis, saepe, dolorem dolor iure totam quae. Ipsum facilis vero quaerat iure blanditiis.</p>
            <div className="container">
                <div className="row">
                {data.map((v,i)=>{
                        return <div className='col-lg-3 col-md-6 col-sm-12' key={i}>
                            <div>
                            <h1>{v.id}</h1>
                            <p>{v.email}</p>
                            <h2>{v.username}</h2>
                            </div>
                        </div>
                    })}

                </div>
                
                
                   
               
                
                <div className='d-flex justify-content-center'><Link href="/"><button className='btn btn-success'>Home</button></Link></div>
            </div>

            
            
        </div>
    )
}

export default users
