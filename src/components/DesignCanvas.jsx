import React, { useState, useContext, useEffect } from "react";
import Moveable from "react-moveable";
import {DroppedElement} from "./DroppedContext"
import { imgPaths } from "../data/DesignImages"
/*
import { motion } from "framer-motion";
import DesignSection from "./components/DesignSection"
import {imgPaths} from "./data/DesignImages"
*/

export default function DesignCanvas(){

    const {dropped} = useContext(DroppedElement);
    const [dropArr, setDropArr] = useState([])

    useEffect(() => {
        dropped && setDropArr( dA => [...dA, dropped])
    }, [dropped])

    const DroppedDesign = ({id,path,frame, set}) => {
        const selectMe = (e) => {/* set(e.target) */}
        return(
          <div
          className="draggable"
          onClick={selectMe}
          style={{transform:`translate(${frame[0]}px, ${frame[1]}px) scale(${frame[2]}, ${frame[2]}) rotate(${frame[3]}deg)`}}
          data-frame="0, 0, 1, 0" >
          <img style={{pointerEvents:'none'}} src={path} alt={id} />
        </div>
        ) 
    };

    /*
    const [selected  , setSelected  ] = useState();
    const [tempFrame , setTempFrame ] = useState({
      translate :[ 0 , 0 ] ,
      scale     :[ 1 , 1 ] ,
      rotate    :0
    });

    const DroppedDesign = ({img,frame, set}) => {
      const selectMe = (e) => { set(e.target) }
      return(
        <div
        className="draggable"
        onClick={selectMe}
        style={{transform:`translate(${frame[0]}px, ${frame[1]}px) scale(${frame[2]}, ${frame[2]}) rotate(${frame[3]}deg)`}}
        data-frame="0, 0, 1, 0" >
        <img src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/40041/${img}`} alt={img} />
      </div>
      ) 
    };
    const thisStartEvent = (e, type) => {
      const F = e.target.dataset.frame.split(",").map( n => parseFloat(n) )
      const updatedFrame = {
        translate :[ F[0] , F[1] ] ,
        scale     :[ F[2] , F[2] ] ,
        rotate    :F[3]
      }
      type === "drag"   && e.set(updatedFrame.translate);
      type === "rotate" && e.set(updatedFrame.rotate);
      type === "scale"  && e.set(updatedFrame.scale);
  
      e.dragStart && e.dragStart.set(updatedFrame.translate);
      setTempFrame(updatedFrame);
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
    }
    //{get().map( (e,i) => <DroppedDesign key={`dropped_${i}`} img={e.img} frame={e.frame} set={setSelected} />)}
    console.log('test',{dropped})

    const MoveableElement = () =>(
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
    )
    */
    return (
      <div className="designCanvas">
          {dropArr.map( (DE) => <DroppedDesign key={DE.id} id={DE.id} path={DE.path} frame={DE.frame} set={'g'}/> )}
      </div>
    ) ;
  }
  