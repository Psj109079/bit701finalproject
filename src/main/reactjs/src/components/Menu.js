import React from 'react';
import "../App.css";
import {NavLink, useNavigate} from "react-router-dom";

function Menu(props) {
    let login = sessionStorage.loginok;
    let name = sessionStorage.myname + "(" + sessionStorage.myid + ")";
    const navi = useNavigate();
    const inout = () => {
        sessionStorage.loginok = "no";
        sessionStorage.myname = "";
        sessionStorage.myid = "";
        navi("/");
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
                <NavLink to={"/board/list/1"}>게시판</NavLink>
            </li>
            {login === null || login === "no" || login === undefined ?
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