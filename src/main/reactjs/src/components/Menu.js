import React from 'react';
import "../App.css";
import {NavLink, useNavigate} from "react-router-dom";

function Menu(props) {
    let name = sessionStorage.myname + "(" + sessionStorage.myid + ")";
    const navi = useNavigate();
    const inout = () => {
        sessionStorage.removeItem("toknen");
        // sessionStorage.loginok = "no";
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
                <NavLink to={"/reducer1"}>Reducer1</NavLink>
            </li>
            <li>
                <NavLink to={"/reducer2"}>Reducer2</NavLink>
            </li>
            <li>
                <NavLink to={"/callback"}>callback</NavLink>
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
            {sessionStorage.token == null ?
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