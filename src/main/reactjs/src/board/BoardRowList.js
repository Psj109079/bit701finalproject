import React from 'react';
import {NavLink} from "react-router-dom";
import noimg from "../image/sorryfast.gif"
function BoardRowList(props) {
    const {idx, no, row, currentPage} = props;

    const URL_F40 = process.env.REACT_APP_SMALL_BOARDURL1;
    const URL_L40 = process.env.REACT_APP_SMALL_BOARDURL2;
    return (
        <tr>
            <td>{no - idx}</td>
            <td>
                <NavLink to={`/board/detail/${row.num}/${currentPage}`} style={{textDecoration:"none", color:"black", cursor: "pointer"}}>
                    {row.photo == null ? <img alt="" src={noimg} style={{width: "40px", height: "40px"}}/>
                        : <img alt="" src={`${URL_F40}${row.photo}${URL_L40}`}/>}
                    <b>{row.subject}</b>
                </NavLink>
            </td>
            <td>{row.myname}</td>
            <td>{row.writeday}</td>
            <td>{row.readcount}</td>
        </tr>
    );
}

export default BoardRowList;