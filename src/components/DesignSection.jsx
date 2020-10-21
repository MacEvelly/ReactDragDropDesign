import React from "react";
import DesignToolBox from "./DesignToolbox"
import DesignCanvas from "./DesignCanvas"
import {DroppedProvider} from "./DroppedContext"
import DesignPDFButton from "./DesignPDFButton";
//import TestLocalStorage from "./testLocalStorage"

export default function DesignSection() {
  return (
    <section className="DesignSection" >
      <DroppedProvider>
        <DesignCanvas  />
        <DesignToolBox />
        <div className="buttonHolder">
          <DesignPDFButton />
        </div>
      </DroppedProvider>
    </section>
  ); 
}
 