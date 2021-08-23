import React from 'react'
import { useSelector } from 'react-redux'
import PagesW from '../stylesW/pagesW'
import Image from 'next/image'


const Cards = () => {
    const cards = useSelector(state => state.cards);
    return (
        <PagesW>
            <h1  className='text-center p-1 mt-3'>Card owners</h1>
            <h3  className='text-center mb-5'>Here you can read card owners and their cards</h3>

           <div className="container ">
           <div className="row mt-3 me-2">
                           {cards.map((v,i)=>{
                               return  <div className="col-lg-4 col-md-6 col-sm-12 p-1 d-flex justify-content-center" key={i}>
                                   <div className={`plastik_card m-2 ${v.classColor}`}>
                                                <div className='m-4'>
                                                <div className='d-flex justify-content-between'>
                                                    <div className='p'>
                                                    <p className='cloudcash'>cloudcash</p>
                                                    <p className='cloudcashsm'>PREMIUM ACCOUNT</p>
                                                </div>
                                                <p><img className='masterCard' src="https://www.mastercard.ru/content/dam/mccom/global/logos/logo-mastercard-mobile.svg" alt="" /></p>
                                                </div>
                                                <div className='simCard'>
                                                    <img  className='simCard' src="https://previews.123rf.com/images/miceking/miceking1603/miceking160300029/53109625-chip-of-credit-card-sim-card-chip.jpg" alt="" />
                                                </div>
                                                <p className='card_codes'>{v.number1} <span>****</span> <span>****</span> {v.number2}</p>
                 
                                                <div className='d-flex justify-content-between mt-2'>
                                                   <div>
                                                       <p className='cloudcashsm mb-0 pb-0 mt-2'>Card holder</p>
                                                       <p className='cloudcashmd'>{v.card_owner}</p>
                                                   </div>
                                                   <div>
                                                       <p className='cloudcashsm mb-0 pb-0 mt-2'>Expire date</p>
                                                       <p className='cloudcashmd'>{v.date}</p>
                                                   </div>
                                                </div>
                                                </div>
                                                  </div>
                               </div>
                           })}
            </div>
           </div>
            
        </PagesW>
    )
}

export default Cards
