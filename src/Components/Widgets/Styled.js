import Styled from "styled-components";

export const Widgetss = Styled.div
`
padding: 0 30px 10px 20px;
flex: 0.3;
overflow-y: scroll;
box-sizing: border-box;
&::-webkit-scrollbar{
    display:none;
}
-ms-overflow-style: none;
scrollbar-width: none;
@media only screen and (max-width: 1280px){
    flex: 0.4;
}
@media only screen and (max-width: 1004px){
    display: none;
}
`

export const Header = Styled.header
`
background: #fff;
height: 50px;
position: sticky;
padding-top: 10px;
top: 0;
`

export const DivIcon = Styled.div
`
display: flex;
align-items: center;
background-color: #eee;
padding: 10px;
border-radius: 20px;
>.SearchIcon{
    color:#5b7083;
}
>input{
    border: none;
    outline: none;
    padding-left: 10px;
    background-color: #eee;
    font-size: 16px;
}
`

export const DivContent = Styled.div``

