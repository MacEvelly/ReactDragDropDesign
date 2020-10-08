import React from "react";

export default function DesignEditable({img,frame, set}) {
    const selectMe = (e) => { set(e.target) }
    return (
        <div
        className="draggable"
        onClick={selectMe}
        style={{transform:`translate(${frame[0]}px, ${frame[1]}px) scale(${frame[2]}, ${frame[2]}) rotate(${frame[3]}deg)`}}
        data-frame="0, 0, 1, 0" >
        <img src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/40041/${img}`} alt={img} />
      </div>
    );
}