import React from 'react';
import {Home, Menu} from "./components";
import {Route, Routes} from "react-router-dom";
import {LoginForm, MemberForm, MemberList} from "./member";
import {BoardDetailPage, BoardForm, BoardList} from "./board";
import img from "./image/chim0unbg.gif";
import "./App.css"
import ReducerComp1 from "./day0627/ReducerComp1.";
import ReducerComp2 from "./day0627/ReducerComp2";
import CallbackTest from "./Callback/CallbackTest";

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
                
                {/* Reducer 연습 라우터 추가 */}
                <Route path="/reducer1" element={<ReducerComp1/>}/>
                <Route path="/reducer2" element={<ReducerComp2/>}/>

                {/* use Callback 연습 라우터 추가 */}
                <Route path="/callback" element={<CallbackTest/>}/>

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