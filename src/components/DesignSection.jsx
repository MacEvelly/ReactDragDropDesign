import React from "react";
import DesignToolBox from "./DesignToolbox"
import DesignCanvas from "./DesignCanvas"
import {DroppedProvider} from "./DroppedContext"

export default function DesignSection() {
  return (
    <section className="DesignSection" >
      <DroppedProvider>
        <DesignCanvas  />
        <DesignToolBox />
      </DroppedProvider>
    </section>
  ); 
}
 