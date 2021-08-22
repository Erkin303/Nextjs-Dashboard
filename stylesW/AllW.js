import styled from "styled-components";

const Allw=styled.div`
overflow-x: hidden !important;
    .heads{
        padding: 5px;
        background-image: linear-gradient(to right top, #0d2a57, #1d366b, #2e427f, #3e4e93, #505ba8);
        color: white;
        align-self: flex-start;     
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        ul{
            display: flex;
            list-style-type: none;
            margin: 0 0 0 0 !important;
                padding: 0 0 0 0 ;
            li{
                margin: 0 10px;
                padding: 10px;
                a{
                    text-decoration: none;
                    color: white;
                    &:hover{
                        text-decoration: none;
                    }
                }
            }
        }
       
    }

    .footers{
        padding: 20px;
        background-image: linear-gradient(to right top, #0d2a57, #1d366b, #2e427f, #3e4e93, #505ba8);        color: white;
        margin: 10px;
        border-radius: 10px;
    }
    .dh{
        display: flex;
        height: 100%;
        
        .dashboard{
            width: 250px;
            position: sticky !important;
            top: 10px !important;
            left: 10px !important;
            margin: 10px;
            height: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            background-image: linear-gradient(to right top, #0d2a57, #1d366b, #2e427f, #3e4e93, #505ba8);        border-radius: 10px;
        .bbtn{
            p{
                padding: 10px;
                margin: 0 10px;
                text-align: center;
                color: white;
            }
        }
        .uls{
            margin: 10px;
            ul{
                margin: 0 0 0 0 !important;
                padding: 0 0 0 0 ;
                list-style-type: none;
                li{
                    margin: 10px;
                        .links{
                            transition: 0.3s;
                            width: 100%;
                            padding: 7px 5px;
                            margin: 15px 0;
                            background-color: rgba(255, 255, 255, 0.575);
                            border-radius: 5px;
                            display: flex;
                            align-items: center;
                                &:hover{
                                    box-shadow: 2px 5px 6px 0  #0C254C !important;
                                }
                                .icons{
                                    font-size: 17px;
                                    margin: 5px;
                                    padding: 0 10px;
                                    font-weight: bold;
                                }
                        }
                    

                }
            }
        }
        }

        .head{
        flex: 1;
        margin: 10px;
        width: 100%;
        }
    .header_bottom{
        height: 100%;
    }
    .bigrasmramka{
        transition: 0.3s;
        padding: 15px;
        box-shadow: 1px 5px 5px  gray;
        border-radius: 10px;
        margin: 10px;
        &:hover{
            box-shadow: 3px 7px 7px  gray;
        }
        .bgr{
            display: flex;
            justify-content: center;
            width: 100%;
            .rasmramka{
                width: 80px;
                height: 80px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #7474c8;
                p{
                    margin: 0;
                    padding: 0;
                }
            }
        }
    }


    .homemain{
        .width_swiper{
            width:100% !important;
            padding: 0 40px 0 0;

        }
        .weekly{
            font-size: 43px;
            font-weight: 600;
           
        }
        .weekly_sm{
            font-size: 16.0564px;
            line-height: 20px;
            color: #AEAEAE;

        }
       
        .olchamlar{
            min-width: 150px;
        }   
    }


    .bldsm{
        font-weight: normal;
        font-size: 14px  !important;
        line-height: 17px;
        color: #AEAEAE !important;

    }
    .photocard{
        padding: 10px;
        border-radius: 10px;
        box-shadow: 1px 5px 5px  gray;
        &:hover{
            box-shadow: 2px 7px 7px  gray;
        }
    }
    .car_big{
        background: #DDF9E4;
        width: 50px;
        height: 50px;
        display:flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
        border-radius: 3px;
        .green_car{
            color:  #209D43;
            font-size: 25px;
        }

    }

    .korzinka{

        background: #FFEADA;
        width: 50px;
        height: 50px;
        display:flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
        border-radius: 3px;
        .yellow_korzine{
            color: #FCAE73;
            font-size: 25px;
        }
    }
    .widthes{
        height: 10px;
        border-radius:30px;
        background: linear-gradient(270deg, #FCAE73 0%, #F79042 99.18%);
    }
    .big_width{
        width: 340px;
        background: #F1F1F1;
        margin: 5px 5px 0 5px;
        border-radius:30px;
        .widthes2{
            height: 10px;
            border-radius:30px;
            background: linear-gradient(90deg, #209D43 0%, #2BC255 100%);
        }
    }

    .plane_big{
        background: #E4F0FF;
        width: 50px;
        height: 50px;
        display:flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
        border-radius: 3px;
        .blue_plane{
            color:#70A6E8;
            font-size: 25px;
        }
    }
    .widthes3{
        height: 10px;
        border-radius:30px;
        background: #70A6E8;
    }
   
}

    .card_shadow{
        box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
        border-radius: 28px;
        margin: 5px 5px 20px 5px;
        padding:11px;
          table{
              padding: 10px;
              width:100%;
            th{
                font-size: 14px  !important;
                line-height: 17px;
                color: #AEAEAE !important;
            }
            td{
                font-size: 14px;
                line-height: 17px;
                color: #AEAEAE ;
                padding: 7px 0;
            }

          }
          .dollarright{
            font-weight: 600;
            font-size: 23.9789px;
            line-height: 29px;
            margin-bottom: 0;
            color: #696969;
          }
          .mountain{
            font-size: 20px;
            margin-bottom: 0;
          }
            .dollars{
                margin: 0 15px 0 0;
                padding: 15px;
                border-left: 1px solid gray;

                .bluedollars{font-weight: bold;
                font-size: 24px;
                line-height: 22px;
                color: #197BBD;
                margin-bottom: 0;
                padding-bottom: 0;
                }
                
                .bldsm{
                    font-weight: normal;
                    font-size: 14px  !important;
                    line-height: 17px;
                    color: #AEAEAE !important;

                }
                .dollargreen{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 22px;
                    margin-bottom: 0;
                    color: #439A86;

                }
                .dollar_yellow{
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 22px;
                    margin-bottom: 0;
                    color: #BB4430;

                }
            }

            .plastik_card{
                .cloudcash{
                font-weight: bold;
                font-size: 16.7475px;
                line-height: 21px;
                color: white;
                margin-bottom:0;
                margin-right: 15px;
            }
            .cloudcashsm{
                font-weight: bold;
                font-size: 8.11292px;
                line-height: 10px;
                color: rgba(255, 255, 255, 0.39);
            }
            .card_codes{
                font-weight: 500;
                font-size: 21.4918px;
                line-height: 27px;
                color: #FFFFFF;
                margin-top: 15px;

            }
            .cloudcashmd{
                font-weight: 500;
                font-size: 12.6167px;
                line-height: 15px;
                color: #FFFFFF;
                margin:0;
                padding: 0;
            }
            }
            
        }
        .plastik_card{
            background: linear-gradient(180deg, #197BBD 0%, #3391D0 100%);
            border-radius: 26px;
            width :340px;
            height :206.17px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }
        .bigSwiper{
            width: 350px !important;
        }
    .sawiperSlide{
        width: 400px !important;
    }
    .asosiyChaptaraf{
        display:flex;
    }
    .HTE{
        display:flex;
    }
    .dashboardWord{
        color: white;
        text-align:center;
        font-size: 30px;
        font-weight: bold;
    }
    .cloudCash{
        text-align:center;
    }
    .cc{
        max-lines: 7px;
        color:white;
    }
    .giveY{
        color:white;
        font-size: 13px;
    }
    .head{
        padding-right:1px;
    }

    @media screen and (max-width:1200px){
        .asosiyChaptaraf{
        display:block !important;
        }
        .dollars{
            margin: 25px 0 !important;
            padding: 15px !important;
            border-left: none !important;
        }
        .card_shadow{
        max-width: 400px !important;
        /* min-width: 400px !important; */
        }
        .HTE{
        display:block;
        }
        .dashboardWord{
        color: white;
        text-align:center;
        font-size: 15px;
        font-weight: 500;
        }
        .cloudCash{
        text-align:center;
        font-size: 14px;
        }
        .cc{
        display: block;
        }
        .components{
            display: none;
        }
        .icons{
            margin: 0;
            padding: 0;
        }
        .dashboard{
            margin-right: 0;
            width: 100px !important;
            transition: 0.3s;
            ul{
                display: block;
                li{
                    .links{
                        padding: 3px;
                        margin: 5px;
                        .icons{
                            font-size: 17px;
                            margin: 5px;
                            padding: 5px;
                        }
                    }
                }
            }
        }
        .giveY{
        display: none;
        }
        .buttonUchun{
            display: none;
        }
        .big_width{
        width: 300px;
        background: #F1F1F1;
        margin: 5px 5px 0 5px;
        border-radius:30px;
        }
        

    }
    @media screen and (max-width:560px){
        .dh{
            display: block;
        }
        .head{
        flex: 0;
        margin: 10px;
        width: 100%;
        padding-right: 0 ;
        margin-right: 0;
        }
        .dashboard{
            width: 95% !important;
            .uls{
                ul{
                    margin: 0 auto;
                    display: flex;
                    li{
                        margin:5px !important;
                    .links{
                        padding: 1px !important;
                        margin: 2px !important;
                        .icons{
                            font-size: 17px;
                            margin: 1px !important;
                            padding: 5px !important;
                        }
                    }
                }
                }
            }
            .dashboardWord{
                display: none;
            }
          
        }
        .plastik_card{
            background: linear-gradient(180deg, #197BBD 0%, #3391D0 100%);
            border-radius: 26px;
            width :300px;
            height :190.17px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            margin-right: 5px;
        }
        .sideBar{
            display: flex;
            justify-content: center;
        }
        .big_width{
        width: 300px;
        background: #F1F1F1;
        margin: 5px 5px 0 5px;
        border-radius:30px;
        }
    }

`;
export default Allw