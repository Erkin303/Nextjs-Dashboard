import React from 'react'
import { useSelector } from 'react-redux'
import PagesW from '../stylesW/pagesW'


const Cards = () => {
    const cards = useSelector(state => state.cards);
    return (
        <PagesW>
            <h1  className='text-center p-1 mt-3'>Card owners</h1>
            <h3  className='text-center mb-5'>Here you can read card owners and their cards</h3>

            <div className="row mt-3">
                           {cards.map((v,i)=>{
                               return  <div className="col-lg-4 col-md-6 col-sm-12 p-1" key={i}>
                                   <div className='plastik_card m-2'>
                               <div className='m-4'>
                               <div className='pb-3'>
                                   <p className='cloudcash'>cloudcash</p>
                               <p className='cloudcashsm'>PREMIUM ACCOUNT</p>
                               </div>

                               <p className='card_codes'>{v.number1} <span>****</span> <span>****</span> {v.number2} </p>

                               <div className='d-flex justify-content-between mt-2'>
                                  <div>
                                      <p className='cloudcashsm mb-0 pb-0 mt-3'>Card holder</p>
                                      <p className='cloudcashmd'>{v.card_owner}</p>
                                  </div>
                                  <div>
                                      <p className='cloudcashsm mb-0 pb-0 mt-3'>Expire date</p>
                                      <p className='cloudcashmd'>{v.date}</p>
                                  </div>
                               </div>
                               </div>
                           </div>
                               </div>
                           })}
            </div>
            
        </PagesW>
    )
}

export default Cards
