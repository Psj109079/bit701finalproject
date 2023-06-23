import React from 'react';
import "../App.css";
import {NavLink} from "react-router-dom";

function Menu(props) {
    let login = sessionStorage.loginok;
    let name = sessionStorage.myname + "(" + sessionStorage.myid + ")";

    const inout = () => {
        sessionStorage.loginok = "no";
        sessionStorage.myname = "";
        sessionStorage.myid = "";
        window.location.reload();
    }

    return (
        <ul className="menu">
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/member/form"}>회원가입</NavLink>
            </li>
            <li>
                <NavLink to={"/member/list"}>회원목록</NavLink>
            </li>
            <li>
                <NavLink to={"/board/list"}>게시판</NavLink>
            </li>
            {login === null || login === "no" ?
                <li>
                    <NavLink to={"/login"}>로그인</NavLink>
                </li> :
                <li style={{width: "250px"}} onClick={inout}>
                    로그아웃 {name}님
                </li>}
        </ul>
    );
}

export default Menu;