import React, { useState, useContext, useEffect } from "react";
import Moveable from "react-moveable";
import DesignEditable from "./DesignEditable"
//import useLocalStorage from "./useLocalStorage"
import { DroppedElement } from "./DroppedContext"
//import { imgPaths } from "../data/DesignImages"

export default function DesignCanvas(){

    const [dropArr     , setDropArr     ] = useState([])
    const [selected    , setSelected    ] = useState();
    const [tempFrame   , setTempFrame   ] = useState();

    /*
    const [droppedLocal, setDroppedLocal] = useLocalStorage('dropped', '')
    console.log(droppedLocal)
    */

    const {dropped} = useContext(DroppedElement);
    const DesignEditableArr = dropArr.map( DE => <DesignEditable key={DE.id} id={DE.id} path={DE.path} frame={DE.frame} set={setSelected}/> )

    useEffect(() => {
        dropped && setDropArr( dA => [...dA, dropped])
    }, [dropped])

    const thisStartEvent = (e, type) => {

      const F = e.target.dataset.frame.split(",").map( n => parseFloat(n) )
      const updatedFrame = {
        translate :[ F[0] , F[1] ] ,
        scale     :[ F[2] , F[2] ] ,
        rotate    :F[3]
      }
      setTempFrame(updatedFrame);

      console.log(updatedFrame, type)
      type === "drag"   && e.set(updatedFrame.translate);
      type === "rotate" && e.set(updatedFrame.rotate);
      type === "scale"  && e.set(updatedFrame.scale);
  
      e.dragStart && e.dragStart.set(updatedFrame.translate);
      e.target.parentNode.append(e.target)

      console.log(tempFrame)
    };
    const thisUpdateEvent = (e) => {
      setTempFrame({
        translate: e.beforeTranslate ? e.beforeTranslate : tempFrame.translate,
        scale: e.scale ? e.scale : tempFrame.scale,
        rotate: e.beforeRotate ? e.beforeRotate : tempFrame.rotate,
      });
  
      e.target.style.transform =
        `translate(${tempFrame.translate[0]}px, ${tempFrame.translate[1]}px)` +
        ` scale(${tempFrame.scale[0]}, ${tempFrame.scale[1]})` +
        ` rotate(${tempFrame.rotate}deg)`;      
    };  
    const thisEndEvent = (e)=>{
      e.target.setAttribute('data-frame', `${tempFrame.translate[0]},${tempFrame.translate[1]},${tempFrame.scale[0]},${tempFrame.rotate}`)
    };
    console.count("stage")
    return (
      <div className="designCanvas">
          <Moveable
            target={selected}
            renderDirections={["nw","ne","w","e","sw","s","se"]}
            edge={false}
            zoom={1}
            origin={false}
            padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
    
            //DRAGGING
            draggable={true}
            throttleDrag={0}
            onDragStart={(e) => thisStartEvent(e, "drag")}
            onDrag={thisUpdateEvent}
            onDragEnd={thisEndEvent}
            
            //SCALING
            scalable={true}
            keepRatio={true}
            throttleScale={0}
            onScaleStart={(e) => thisStartEvent(e, "scale")}
            onScale={thisUpdateEvent}
            onScaleEnd={thisEndEvent}
            
            //ROTATING
            rotatable={true}
            rotationPosition={"top"}
            onRotateStart={(e) => thisStartEvent(e, "rotate")}
            onRotate={thisUpdateEvent}
            onRotateEnd={thisEndEvent}
            
            //PINCHING
            pinchable={true}
        />
        {DesignEditableArr}
      </div>
    ) ;
  }
  