import Styled from 'styled-components';

export const Contenedor = Styled.div
`
flex: 0.6;
border-right: 1px solid rgb(239, 243, 244);
overflow-y: scroll;
box-sizing: border-box;

&::-webkit-scrollbar{
    display:none;
}
-ms-overflow-style: none;
scrollbar-width: none;
@media only screen and (max-width: 1280px){
    flex: 0.55;
}
@media only screen and (max-width: 1004px){
    flex: 0.95;
}
@media only screen and (max-width: 500px){
    flex: 1;
}
`

export const Header =  Styled.header
`
>h2{
    padding-left: 15px;
    font-size: 22px;
    padding-bottom: 10px;
    padding-top: 10px;
}
`

/* TWEET BOX STYLES */

export const TweetBoxx = Styled.div
`
border-bottom: 1px solid rgb(239, 243, 244);
padding: 5px 15px;
`

export const Form = Styled.form
`
display: flex;
flex-direction: column;
`

export const Avatar = Styled.img
`
border-radius: 50%;
width: 50px;
height: 50px;
object-fit: fill;
object-fit: cover;
`

export const Div = Styled.div
`
display: flex;
width: 100%;
>.Column{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 16px;
    >input{
        margin-left: 10px;
        margin-top: 10px;
        width: 100%;
        border: none;
        outline: none;
        font-size: 19px;
        line-height: 25px;
        color: #0f1419;
    }
}
>input{
    margin-left: 10px;
    width: 100%;
    flex: 1;
    border: none;
    outline: none;
    font-size: 19px;
    line-height: 25px;
    color: #0f1419;
    visibility: hidden;
}
>Button{
    margin-top: 5px;
    background: #1d9bf0 !important;
    border: none !important;
    color: #fff !important;
    font-weight: 800 !important;
    text-transform: inherit !important;
    width: 80px; !important;
    height: 40px !important;
    padding: 0 30px !important;
    border-radius: 9999px !important;
}
>Button:hover{
    background-color:  #1a8cd8 !important;
    transition: all 200ms ease-out;
}
`

export const DivBox = Styled.div
`
margin-top: 15px;
justify-content: space-around;
align-items: center;
>.MuiSvgIcon-root{
    font-size: 20px;
    color: #1d9bf0 !important;
    margin-left: 1rem;
    cursor: pointer;
}
>.MuiSvgIcon-root:hover{
    background-color: rgb(29, 155, 240, .1);
    border: o.5px solid rgb(29, 155, 240, .1);
    border-radius: 30px;
    
}
`
export const File = Styled.input
`
max-width: 35px;
position: absolute;
opacity: 0;
z-index: 10;
padding-top: 10px;
cursor: pointer;
`

/* POST STYLES */

export const Postt = Styled.div
`
padding: 10px 15px;
border-top: 1px solid rgb(239, 243, 244);
margin-top: 5px;
display: flex;
align-items: flex-start;
>.Post_Avatar{
    margin-top: 5px;
}
`

export const PostBody = Styled.div
`
padding-left: 10px;
width: 100%;
overflow: hidden;
>div span{
    font-weight: 600;
    font-size: 15px;
    color: #5b7083;
}
.Post_Icon{
    font-size: 14px !important;
    color: #1d9bf0 !important;
}
h3{
    padding: 0;
    margin: 0;
}
`

export const PostDescription = Styled.div
`
margin-bottom: 10px;
>p{
    margin: 0;
    padding: 0;
    color: #0f1419;
    font-size: 16px;
    line-heigth: 19.6875px;

}
`

export const PostFooter = Styled.div
`
display: flex;
justify-content: space-between;
margin-top: 10px;
color: #5b7083;
transition: all 100ms ease-in;
>.MuiSvgIcon-root:hover:nth-child(1){
    fill: #1d9bf0;
    cursor: pointer;
}
>.MuiSvgIcon-root:hover:nth-child(2){
    fill: #A3F01D ;
    cursor: pointer;
}
>.MuiSvgIcon-root:hover:nth-child(3){
    fill: #F0401D ;
    cursor: pointer;
}
>.MuiSvgIcon-root:hover:nth-child(4){
    fill: #1d9bf0;
    cursor: pointer;
}
`

export const Images = Styled.img
`
border-raidus: 20px;
min-width: 100%;
width: 100%;
min-heigth: 300px;
`



