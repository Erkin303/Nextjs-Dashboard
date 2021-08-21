import React, { useState } from 'react'
import Allw from '../stylesW/AllW'
import { AiOutlineHome } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BsInfoSquare } from "react-icons/bs";
import { FaMountain,FaXbox ,FaCarSide} from "react-icons/fa";
import { GiLargePaintBrush } from "react-icons/gi";
import { MdAirplanemodeActive } from "react-icons/md";
import { CgShoppingCart } from "react-icons/cg";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { useSelector } from 'react-redux';






const data2=[
    {hrefs:"Transactions",hrefs2:"/transactions",fw:<AiOutlineHome/>},
    {hrefs:"Cards",hrefs2:"/cards",fw:<FiUsers/>},
    {hrefs:"Info",hrefs2:"/info",fw:<HiOutlinePhotograph/>},
    {hrefs:"Photos",hrefs2:"/photos",fw:<BsInfoSquare/>}
]


const Overview = () => {
    const cards = useSelector(state => state.cards);
    const [activei, setActivei] = useState(0);
    const card=activei;
    console.log(activei);


    return (
        <Allw>
           <div className='homemain'>
               <p className='weekly'>Weekly sumup</p>

               <p className='weekly_sm'>Get summary of your weekly online transactions here.</p>

                {/* cards boshlanishi */}
                
                    
                        <div className="row w-100">
                              <div className="col-lg-6 col-sm-12">
                                  <div className='card_shadow'>
                                      <p className='fs-3'>Cards</p>
                                      <div className='d-flex'>
                                        <Swiper navigation={true} onSlideChange={(e)=>{setActivei(e.activeIndex)}} >
                                           {cards.map((v,i)=>{
                                                return <SwiperSlide > <div className='plastik_card' key={i}>
                                                <div className='m-4'>
                                                <div className='pb-3'>
                                                    <p className='cloudcash'>cloudcash</p>
                                                <p className='cloudcashsm'>PREMIUM ACCOUNT</p>
                                                </div>
                 
                                                <p className='card_codes'>{v.number1} <span>****</span> <span>****</span> {v.number2}</p>
                 
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
                                                  </div></SwiperSlide>
                                           })}
                                            
                                            
                                        </Swiper>

                                     
                                      <div className='dollars'>
                                          <p className='bluedollars'>{cards[card].current_balance}</p>
                                          <p className='bldsm'>Current balance</p>
           
                                          <p className='dollargreen'>{cards[card].income}</p>
                                          <p className='bldsm'>Income</p>
           
                                          <p className='dollar_yellow'>{cards[card].outcome}</p>
                                          <p className='bldsm'>Outcome</p>
                                      </div>
                                      </div>
                                  </div>
           
           
                                  <div className='card_shadow'>
                                      <p>Transaction history</p>
                                      <table>
                                          <thead>
                                              <tr>
                                                  <th>Reciever</th>
                                                  <th>Type</th>
                                                  <th>Date</th>
                                                  <th>Amount</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td> <span className='text-dark'>Tesco Market</span></td>
                                                  <td>Shopping</td>
                                                  <td>13 Dec 2020 </td>
                                                  <td><span className='text-dark'>$ 75.67</span></td>
                                              </tr>
                                              <tr>
                                                  <td> <span className='text-dark'>Tesco Market</span></td>
                                                  <td>Shopping</td>
                                                  <td>13 Dec 2020 </td>
                                                  <td><span className='text-dark'>$ 75.67</span></td>
                                              </tr>
                                              <tr>
                                                  <td> <span className='text-dark'>Tesco Market</span></td>
                                                  <td>Shopping</td>
                                                  <td>13 Dec 2020 </td>
                                                  <td><span className='text-dark'>$ 75.67</span></td>
                                              </tr>
                                               <tr>
                                                  <td> <span className='text-dark'>Tesco Market</span></td>
                                                  <td>Shopping</td>
                                                  <td>13 Dec 2020 </td>
                                                  <td><span className='text-dark'>$ 75.67</span></td>
                                              </tr>
                                          </tbody>
                                      </table>
           
                                  </div>
           
                              </div>
           
                              <div  className="col-lg-6 col-sm-12">
                                  <div className='d-flex p-1 w-100'>
                                      <div  className='card_shadow olchamlar'>
                                          <p className='dollarright'>{cards[card].holidays}</p>
                                          <p className='bldsm'>{cards[card].date2}</p>
                                          <p className='mountain text-primary'><FaMountain/></p>
                                          <p>Holidays</p>
           
                                      </div>
                                      <div  className='card_shadow olchamlar'>
                                          <p className='dollarright'>{cards[card].renovation}</p>
                                          <p className='bldsm'>{cards[card].date2}</p>
                                          <p className='mountain text-warning'><GiLargePaintBrush/></p>
                                          <p>Renovation</p>
           
                                      </div>
                                      <div  className='card_shadow olchamlar'>
                                          <p className='dollarright'>{cards[card].xbox}</p>
                                          <p className='bldsm'>{cards[card].date2}</p>
                                          <p className='mountain text-success'><FaXbox/></p>
                                          <p>Xbox</p>
           
                                      </div>
           
                                  </div>
           
                                  <div className='l'>
                                      <p>Outcome Statistics</p>
                                      <div className='d-flex w-100'>
                                          <div className='korzinka p-2'>
                                              <span className='yellow_korzine'><CgShoppingCart/></span>
                                          </div>
                                          <div>
                                              <div className='big_width'>
                                              <div className='widthes ' style={{width:cards[card].shoping}}></div>
                                              </div>
                                              <p className='bldsm ps-2 pt-1'>Shoppping</p>
                                          </div>
                                          <p className='ps-1 fs-4'>{cards[card].shoping}</p>
                                      </div>
           
                                      <div className='d-flex w-100 mt-3'>
                                          <div className='car_big p-2'>
                                              <span className='green_car'><FaCarSide/></span>
                                          </div>
                                          <div>
                                              <div className='big_width'>
                                              <div className='widthes2  mt-2'  style={{width:cards[card].electronics}}></div>
                                              </div>
                                              <p className='bldsm ps-2 pt-1'>Electronics</p>
                                          </div>
                                          <p className='ps-1 fs-4'>{cards[card].electronics}</p>
                                      </div>
           
                                      <div className='d-flex w-100 mt-3'>
                                          <div className='plane_big p-2'>
                                              <span className='blue_plane'><MdAirplanemodeActive/></span>
                                          </div>
                                          <div>
                                              <div className='big_width'>
                                              <div className='widthes3 ' style={{width:cards[card].travel}}></div>
                                              </div>
                                              <p className='bldsm ps-2 pt-1'>Travels</p>
                                          </div>
                                          <p className='ps-1 fs-4'>{cards[card].travel}</p>
                                      </div>
                                  </div>
           
                              </div>
                          </div>
           
              
           </div>


        </Allw>
    )
}

export default Overview
