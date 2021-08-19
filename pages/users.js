import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from '../redux/actions';
import PagesW from './../stylesW/pagesW'


const Users = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        setUsers(dispatch);                          
   
    }, []);

    const data = useSelector(state => state.users)

    return (
        <PagesW className='header_bottom'>
            <h1 className='text-center p-3'>Hi Users 👋</h1>
            <h3 className='text-center p-3 mb-3'>That's your informations !</h3>
            <p className='text-center ms-4 me-4'>Dolor sit amet consectetur adipisicing elit. Non eum vitae veritatis distinctio ducimus minima voluptates reprehenderit facilis, saepe, dolorem dolor iure totam quae. Ipsum facilis vero quaerat iure blanditiis.</p>
            <div className="container">
                <div className="row">
                {data.map((v,i)=>{
                        return <div className='col-lg-3 col-md-6 col-sm-12' key={i}>
                            <div className='photocard'>
                            <h1>{v.id}</h1>
                            <p>Email: <a href={v.email}>{v.email}</a></p>
                            <p>Name: {v.username}</p>
                            <p>Street: {v.address.street}</p>
                            </div>
                        </div>
                    })}

                </div>
                
            </div>

            
            
        </PagesW>
    )
}

export default Users
