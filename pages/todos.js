import React from 'react'
import PagesW from './../stylesW/pagesW'


const todos = () => {
    return (
        <PagesW>
            <h1  className='text-center p-1 mb-3 mt-3'>Todos 👇</h1>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className='p-2 photocard'>
                   <div>
                        <p className='text-center fs-3 text-primary'>Todos 1</p>
                        <p className='text-center fs-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem alias quia soluta architecto distinctio nostrum enim omnis in amet magnam earum,
                         accusantium a exercitationem quibusdam natus illo. Sunt, officiis numquam!</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-primary'>Go to</button>
                        <button className='btn btn-warning'>Aboute</button>
                    </div>
                   </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className='p-2 photocard'>
                   <div>
                        <p className='text-center fs-3 text-primary'>Photos 1</p>
                        <p className='text-center fs-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem alias quia soluta architecto distinctio nostrum enim omnis in amet magnam earum,
                         accusantium a exercitationem quibusdam natus illo. Sunt, officiis numquam!</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-primary'>Go to</button>
                        <button className='btn btn-warning'>Aboute</button>
                    </div>
                   </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className='p-2 photocard'>
                   <div>
                        <p className='text-center fs-3 text-primary'>Photos 1</p>
                        <p className='text-center fs-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem alias quia soluta architecto distinctio nostrum enim omnis in amet magnam earum,
                         accusantium a exercitationem quibusdam natus illo. Sunt, officiis numquam!</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-primary'>Go to</button>
                        <button className='btn btn-warning'>Aboute</button>
                    </div>
                   </div>
                </div>
            </div>
            
        </PagesW>
    )
}

export default todos
