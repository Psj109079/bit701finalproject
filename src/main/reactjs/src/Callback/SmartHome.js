import React, {useCallback, useState} from 'react';
import Light from "./Light";

function SmartHome(props) {
    const [masterOn, setMasterOn] = useState(false);
    const [kitchenOn, setKitchenOn] = useState(false);
    const [bathOn, setBathOn] = useState(false);

    // 이렇게 함수를 생성하면 한군데만 state값이 변경되도 3군데 모두 호출됨
    // const toggleMaster = () => {
    //     setMasterOn(!masterOn);
    // }
    // const toggleKitchen = () => {
    //     setKitchenOn(!kitchenOn);
    // }
    //
    // const toggleBath = () => {
    //     setBathOn(!bathOn);
    // }

    // useCallback 을 이용해서 함수 생성
    const toggleMaster = useCallback(() => {
        setMasterOn(!masterOn);
    }, [masterOn]);

    const toggleKitchen = useCallback(() => {
        setKitchenOn(!kitchenOn);
    }, [kitchenOn]);

    const toggleBath = useCallback(() => {
        setBathOn(!bathOn);
    }, [bathOn]);
    return (
        <div>
            <Light room={"침실"} on={masterOn} toggle={toggleMaster}></Light>
            <Light room={"주방"} on={kitchenOn} toggle={toggleKitchen}></Light>
            <Light room={"욕실"} on={bathOn} toggle={toggleBath}></Light>
        </div>
    );
}

export default SmartHome;