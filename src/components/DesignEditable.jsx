import React from "react";

const DesignEditable = ({id,path,frame, set}) => {
  const selectMe = (e) => { 
    set(e.target) 
    e.target.parentNode.append(e.target)
  }
  return(
    <div
      className="draggable editable"
      onClick={selectMe}
      style={{transform:`translate(${frame[0]}px, ${frame[1]}px) scale(${frame[2]}, ${frame[2]}) rotate(${frame[3]}deg)`}}
      data-frame={frame} >
    <img style={{pointerEvent:"none"}}  src={path} alt={id} />
  </div>
  ) 
};
export default React.memo(DesignEditable)