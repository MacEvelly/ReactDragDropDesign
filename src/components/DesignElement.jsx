import React, { useRef, useState, useContext } from "react";
import { motion } from "framer-motion";
import {DroppedElement} from "./DroppedContext"

export default function DesignElement({id, path}) {
    
    const {setDropped}  = useContext(DroppedElement);
    const [idNum, setIdNum] = useState(0);
    const refillParent  = useRef(null);
    const designElement = useRef(null);
    function dragStart(e, i) {
      if (designElement.current.parentElement === refillParent.current){
        var target = designElement.current
        var offSet = target.getBoundingClientRect();
        var myX = (offSet.left + window.scrollX)
        var myY = (offSet.top  + window.scrollY)
        target.style.top  = myY + "px";
        target.style.left = myX + "px";
        document.body.append(target);
      }
    }
  
    function dragEnd(e, i) {
      
      var target = designElement.current
      var dropOffset  = target.getBoundingClientRect();
      target.style.top  = "0px"
      target.style.left = "0px"
      target.style.transform = "translate3d(0px, 0px, 0px) scale(1, 1)" 
      refillParent.current.append(target)
      
      var stage = document.querySelector(".designCanvas")
      var stageOffset = stage.getBoundingClientRect();
      var myY = (dropOffset.top  + window.scrollY  ) - ( stageOffset.top + window.scrollY  )  
      var myX = (dropOffset.left + window.scrollX  ) - ( stageOffset.left + window.scrollX )
      // add({id:id, frame: [myX, myY, 1, 0]});
      setDropped({id:Date.now(), imageId:id, path:path, frame: [myX, myY, 1, 0]})
      //setDropped({id:id, frame: [myX, myY, 1, 0]})
    }
  
    return (
      <div className="dragHome" ref={refillParent}>
        <motion.div
          drag
          layout
          className    = "draggable"
          ref          = {designElement}
          dragMomentum = {false}
          onDragStart  = {dragStart}
          onDragEnd    = {dragEnd}
        >
          <img style={{pointerEvents:'none'}} data-id={id} src={path} alt={path}/>
        </motion.div>
      </div>
    );

}