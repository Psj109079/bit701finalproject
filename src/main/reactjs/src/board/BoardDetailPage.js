import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Axios from "axios";
import "../App.css"
import joo from "../image/bombberjoo.png";
function BoardDetailPage(props) {

    const {num, currentPage} = useParams();
    const [data, setData] = useState({});

    const PHOTO_URL = process.env.REACT_APP_BOARDURL;
    const myid = sessionStorage.myid;
    const loginok = sessionStorage.loginok;
    const navi = useNavigate();

    // const getData = () => {
    //     const url = "/board/detail?num=" + num;
    //     // Axios.get(url)
    //     //     .then(res => {
    //     //         setData(res.data);
    //     //     })
    //     Axios({
    //         type: "get",
    //         url,
    //         headers: {Authorization: `Bearer ${sessionStorage.token}`}
    //     }). then(res => {
    //         setData(res.data);
    //     })
    // }

    const selectData = useCallback(() => {
        const url = "/board/detail?num=" + num;
        Axios({
            type: "get",
            url,
            headers: {Authorization: `Bearer ${sessionStorage.token}`}
        }).then(res => {
            setData(res.data);
        })
    },[num])

    useEffect(() => {
        if(sessionStorage.token == null) {
            alert("게시판 내용은 회원만 확인 가능합니다 \n먼저 로그인을 해주세요");
            navi("/login");
            return;
        }
        selectData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectData]);
    
    const deleteData = () => {
        let c = window.confirm("삭제하려면 [확인]을 눌러주세요");
        if(c) {
            const url = "/board/delete?num=" + num;
            Axios.delete(url)
                .then(res => {
                    alert("데이터 삭제 완료");
                    // 목록으로 이동
                    navi(`/board/list/${currentPage}`);
                })
        }
    }
    return (
        <div style={{width: "900px", margin: "0 auto 0 auto"}}>
            <img alt="" className="joo" src={joo}/>
            <span style={{display: "block", fontSize: "35px", fontWeight: "bold"}}>{data.myid && data.myid.substring(0, 3) + "*".repeat(3)}</span>
            <div style={{margin: "10px 15px 40px 15px", fontSize: "20px"}}>
                <span style={{margin: "0 15px 0 15px"}}>{data.myname}</span>
                <span style={{margin: "0 15px 0 15px"}}>{data.subject}</span>
                <span style={{margin: "0 15px 0 15px"}}>{data.writeday}</span>
                <span style={{margin: "0 15px 0 15px", color: "#cccccc", fontSize:"15px"}}>조회 {data.readcount}</span>
            </div>
            {data.photo == null ? "" :  <span><img alt="" className="zero" src={`${PHOTO_URL}${data.photo}`}/></span>}
            <div style={{width: "900px", height: "500px", border: "3px solid hotpink", marginTop: "60px"}}>
                <span>{data.content}</span>
            </div>
            <br/>
            <div>
                <button type="button" className="btn btn-outline-danger" style={{width: "80px", marginRight: "8px"}}
                        onClick={() => navi("/board/form")}>글쓰기</button>
                <button type="button" className="btn btn-outline-danger" style={{width: "80px", marginRight: "8px"}}
                        onClick={() => navi("/board/list/1")}>목록</button>
                {loginok != null && myid === data.myid ?
                        <button type="button" className="btn btn-outline-danger" style={{width: "80px", marginRight: "8px"}}
                                onClick={deleteData}>삭제</button> : ""}
                {loginok != null && myid === data.myid ?
                    <button type="button" className="btn btn-outline-danger" style={{width: "80px", marginRight: "8px"}}
                            onClick={() => {

                            }}>수정</button> : ""}
            </div>

        </div>
    );
}

export default BoardDetailPage;