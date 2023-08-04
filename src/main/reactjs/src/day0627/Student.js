import React from 'react';

function Student(props) {
    const {stu, dispatch} = props;
    // const {stu,dispatch}=props;

    return (
        <div className="input-group" style={{width: "200px"}}>
            <span style={{textDecoration: stu.isHere? "line-through" : "none", cursor: "pointer",
                color: stu.isHere? "gray" : "black", display: "inline-block", fontSize: "22px"}}
            onClick={() => dispatch({type: "mark-student", payload: {id: stu.id}})}>
                {stu.name}
            </span>
            &nbsp;&nbsp;
            <button type="button" className="btn btn-sm btn-outline-danger"
                    onClick={() => dispatch({type: "delete-student", payload:{id: stu.id}})}>삭제</button>
        </div>
    );
}

export default Student;