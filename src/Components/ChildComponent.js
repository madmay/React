import React from "react";

function ChildComponenet(props){
    return (
        <div>
            <button onClick={() =>  props.greetHandler('child')}>Click</button>
        </div>
    )
}

export default ChildComponenet