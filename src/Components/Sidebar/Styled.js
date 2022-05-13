import Styled,{css} from "styled-components";

export const Contenedor = Styled.div
`
padding: 20px;
border-right: 1px solid rgb(239, 243, 244);
flex: 0.3;
min-width: 255px;

>.Twitter-logo {
    margin: 10px 0;
    width: 46px;
    heigth: 30px;
    color: #1d9bf0 !important;
}
>Button{
    margin-top: 10px;
    background: #1d9bf0 !important;
    border: none !important;
    color: #fff !important;
    font-weight: 800 !important;
    text-transform: inherit !important;
    height: 46px !important;
    padding: 0 30px !important;
    border-radius: 9999px !important;
}
>Button:hover{
    background-color:  #1a8cd8 !important;
    transition: all 200ms ease-out;
}

@media only screen and (max-width: 1280px){
    flex: 0.05;
    min-wight: 50px;

>Button { 
        display: none;
    }

}
@media only screen and (max-width: 1004px){
    width: 40px;
}
@media only screen and (max-width: 500px){
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 999;
    height: 50px;
    background-color: #fff;
    width: 100%;
    padding: 0;
>.Twitter-logo{
    display: none;
}
}

`

export const SidebarIcon = Styled.div
`
display: flex;
align-items: center;
padding: 14px 10px;
>h2{
    color: rgb(15, 20, 25, 0.7 ) !important;
    font-size: 19px;
    margin: 0 15px 0 20px;
    font-weight:  500;
}
>.MuiSvgIcon-root{
    color: rgb(15, 20, 25, .8 );
    width: 30px;
    height: 30px;
}
&:hover {
    background-color:  rgb(15, 20, 25, .1 ) !important;
    border-radius: 9999px;
    transition: all 100ms ease-out;
}

${props => props.Active && css
`
color: #fff !important;
font-weight: 800 !important;
`}
@media only screen and (max-width: 1280px){
    border-radius: 50%;
>h2{
    display: none;
}
}
@media only screen and (max-width: 500px){
    color: #b8b8b8;
    display: ${props => props.Primary ? "none" : " "};
}
`