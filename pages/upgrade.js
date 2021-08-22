import React from 'react'
import PagesW from '../stylesW/pagesW'
import DatePickers from './../components/dates'
import CustomizedSwitches from './../components/chacking'


const Upgrade = () => {
    return (
        <PagesW>
           <div className="container bg1">
           <div className="row bg2">
           <h1 className='text-center p-2'>Upgrade to Premium</h1>
                <div className="col-md-6 col-sm-12">
                    <div className='p-2'>
                        <label htmlFor="name" className='form-label'>Your Name</label>
                        <input type="text" className='w-100 form-control mb-4' placeholder='Charlie' id='name'/>

                        <label htmlFor="sureName" className='form-label'>Your Surname</label>
                        <input type="text" className='w-100 form-control  mb-4' placeholder='Puth' id='sureName'/>

                        <div className='mb-3'>
                        <DatePickers></DatePickers>
                        </div>
                        
                        <label htmlFor="passport" className='form-label'>Passport ID</label>
                        <input type="text" className='w-100 form-control  mb-4' placeholder='LL2361020' id='passport'/>

                        <label htmlFor="numbers" className='form-label'>Phone Number</label>
                        <input type="text" className='w-100 form-control' placeholder='+8898-(33)-236-56-89' id='numbers'/>
                        
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className='p-2'>
                        <label htmlFor="country" className='form-label'>Your Country</label>
                        <input type="text" className='w-100 form-control  mb-4' placeholder='USA' id='country'/>

                        <label htmlFor="job" className='form-label'>Your Job</label>
                        <input type="text" className='w-100 form-control  mb-4' placeholder='Businessman' id='job'/>

                        <label htmlFor="country" className='form-label'>Old Card number</label>
                        <input type="number" className='w-100 form-control  mb-4' placeholder='4500 6321 4589 3265' id='country'/>
                        <div>
                            <CustomizedSwitches></CustomizedSwitches>
                        </div>

                        <button className='btn btn-primary mt-3'>Save</button>


                    </div>
                </div>
            </div>
           </div>
            
        </PagesW>
    )
}

export default Upgrade
