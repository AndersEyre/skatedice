import React from 'react';

export function Winner (props) {

    return (
        <div>
            <h1>YOOOOUUUU WIIIIINNN</h1>
            <button onClick={props.shareWin}> share to facebook </button>
        </div>
    )
}

export default Winner;