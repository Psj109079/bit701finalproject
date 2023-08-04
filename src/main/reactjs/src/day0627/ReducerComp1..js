import React, {useReducer, useState} from 'react';

// Reducer 를 이용해서 간단하게 입출금 관리를 하는 예제.
// action.type 을 미리 상수화해서 등록
const ACTION_TYPES = {
    add : "addmoney",
    sub : "submoney"
}

const reducer = (state, action) => {
    console.log("reducer가 일을 합니다", state, action);
    switch (action.type) {
        case ACTION_TYPES.add:
            return state + Number(action.payload);
        case ACTION_TYPES.sub:
            return state - Number(action.payload);
        default:
            return state;

    }
}
function ReducerComp1(props) {
    const [number, setNumber] = useState(0);
    // money 의 state값 변경시 dispatch 로 호출
    const [money, dispatch] = useReducer(reducer, 0); // 0은 money 변수의 초기값
    return (
        <div>
            <h1>useReducer 은행에 오신것을 환영합니다</h1>
            <h3>잔고: {money}원</h3>
            <input type="number" value={number} step={1000} onChange={(e) => setNumber(e.target.value)}/>
            <br/><br/>
            {/*<button type="button" className="btn btn-outline-success"*/}
            {/*        onClick={() => dispatch({"type":"addmoney", payload:number})}>입금</button>*/}
            {/*<button type="button" className="btn btn-outline-success"*/}
            {/*        onClick={() => dispatch({"type":"submoney", payload:number})}>출금</button>*/}
            {/* type 을 상수를 이용해서 호출 */}
            <button type="button" className="btn btn-outline-success"
                    onClick={() => dispatch({"type": ACTION_TYPES.add, payload:number})}>입금</button>
            &nbsp;&nbsp;&nbsp;
            <button type="button" className="btn btn-outline-success"
                    onClick={() => dispatch({"type": ACTION_TYPES.sub, payload:number})}>출금</button>
        </div>
    );
}

export default ReducerComp1;