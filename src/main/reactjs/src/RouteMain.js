import React from 'react';
import {Home, Menu} from "./components";
import {Route, Routes} from "react-router-dom";
import {LoginForm, MemberForm, MemberList} from "./member";
import {BoardDetailPage, BoardForm, BoardList} from "./board";
import img from "./image/chim0unbg.gif";
import "./App.css"
function RouteMain(props) {
    return (
        <div className="App">
            <Menu/>
            <br style={{clear: "both"}}/><br/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/member">
                    <Route path="form" element={<MemberForm/>}/>
                    <Route path="list" element={<MemberList/>}/>
                </Route>
                <Route path="/board">
                    <Route path="form" element={<BoardForm/>}/>
                    <Route path="list" element={<BoardList/>}/>
                    <Route path="list/:currentPage" element={<BoardList/>}/>
                    <Route path="detail/:num/:currentPage" element={<BoardDetailPage/>}/>
                </Route>

                <Route path="*" element={
                   <div>
                       <img alt="" src={img} className="zero"/>
                       <h1>잘못된 URL 주소입니다</h1>
                   </div>
                }/>
            </Routes>
        </div>
    );
}

export default RouteMain;