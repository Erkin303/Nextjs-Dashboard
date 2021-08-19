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
        height: 100v;
        max-height: 100vh;
        min-height: 100vh;
        background-image: linear-gradient(to right top, #0d2a57, #1d366b, #2e427f, #3e4e93, #505ba8);        border-radius: 10px;
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
                        }
                    

                }
            }
        }
        p{
            color: red;
            font-weight: bold;
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
    padding: 15px;
    box-shadow: 1px 5px 5px  gray;
    border-radius: 10px;
    margin: 10px;
   

    }
    /* .homemain{
        
        
    } */
    .photocard{
        padding: 10px;
        border-radius: 10px;
        box-shadow: 1px 5px 5px  gray;
        &:hover{
            box-shadow: 2px 7px 7px  gray;
        }
    }
   
}

`;
export default Allw