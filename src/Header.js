import React from "react";
import "./Header.css";

import Flag from "./pic/VietNamFlag.jpg";

import { Link } from 'react-router-dom';

const headerContent = {
    left:{
        introduce:[
            {
                icon: "fa-star",
                color: "yellow",
                text: "WE ARE AE TỔ 5"
            },
            {
                icon: "fa-bomb",
                color: "rgb(100, 130, 100)",
                text: "WE ARE BEST FRIENDS"
            },
            {
                icon: "fa-heart",
                color: "#ff6464",
                text: "WE ARE TOGETHER"
            }
        ]
    },
    middle:{
        title: "GROUP TỔ 5 - ENTERTAINMENT"
    },
    right:{
        contact:[
            {
                icon: "fa-brands fa-facebook",
                text: "Facebook",
                link: "#"
            },
            {
                icon: "fa-brands fa-instagram",
                text: "Instagram",
                link: "#"
            },
            {
                icon: "fa-solid fa-comments",
                text: "Feedback",
                link: "#"
            }
        ]
    }
}

function Header({pages}){
    return(
        <div id="web-header">
            <div id="web-header__content">
                <div id="header-left">
                    {headerContent.left.introduce.map((element) => (<p key={element.text}><i className={`header-left__introduce fa-solid ${element.icon}`} style={{color:element.color}}></i> {element.text}</p>))}
                </div>
                <div id="header-middle">
                    <h1>{headerContent.middle.title}</h1>
                </div>
                <div id="header-right">
                    <img alt="Cờ Việt Name" id="right__VietNamFlag" src={Flag}></img>
                    {headerContent.right.contact.map(({icon, text, link}) => (<a key={text} className="active" href={link}  rel="noreferrer" target="_blank"><i className={icon}></i>{text}</a>))}
                </div>
            </div>
            <div id="web-header__navbar">
                {pages.map(({id, link, name}) => (<Link key={id} className="header-navbar__element active a-1" id={id} to={link}>{name}</Link>))}
            </div>
        </div>
    )
};

export default Header;