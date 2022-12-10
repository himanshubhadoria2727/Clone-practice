import React from "react";
import "./Header.css";

function Header() {
    return ( <
        div className = "header_logo" >
        <
        img className = "header_logo"
        src = "https://pngimg.com/uploads/amazon/amazon_PNG24.png" / >

        <
        div className = "header_search" >
        <
        input className = "header_searchInput"
        type = "test" / >
        <
        /div>

        <
        div className = "header_nav" >

        <
        div className = "header_option" >
        <
        span className = "header_optionOne" > Hellow Guest < /span>

        <
        span className = "header_optionTwo" > Sign In < /span> <
        /div> <
        div className = "header_option" >
        <
        span className = "header_optionOne" > Return < /span>

        <
        span className = "header_optionTwo" > & Orders < /span> <
        /div>

        <
        div className = "header_option" >
        <
        span className = "header_optionOne" > Your < /span>

        <
        span className = "header_optionTwo" > Prime < /span> <
        /div> <
        /div> <
        /div>
    );
}
export default Header;