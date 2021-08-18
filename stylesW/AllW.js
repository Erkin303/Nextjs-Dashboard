import styled from "styled-components";

const Allw=styled.div`
overflow-x: hidden !important;

    .heads{
        padding: 15px;
        background-color: #0a0a40;
        color: white;
        position: sticky !important;
        top: 10px;
        right: 10px;
        ul{
            display: flex;
            list-style-type: none;
            li{
                margin: 10px;
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
        background-color: blue;
        color: white;
        margin: 10px;
    }
    .dh{
        display: flex;
        
        .dashboard{
        width: 250px;
        margin: 10px;
        min-height: 100vh;
        background-color: #0a0a40;
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
                            margin: 10px 0;
                            background-color: white;
                            border-radius: 5px;
                            display: flex;
                            align-items: center;
                        &:hover{

                            box-shadow: 0 3px 4px 0 solid white !important;
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
    }
    .homemain{
        width: 800px !important;
        background-color: #0a0a40;
    }
}

`;
export default Allw