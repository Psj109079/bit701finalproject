import React from 'react';

function Light({room, on, toggle}) {
    console.log({room, on, toggle});
    return (
        <div>
            <button onClick={toggle}> {room} {on ? "💡" : "⬛"} </button>
        </div>
    );
}

// export default Light;
export default React.memo(Light);