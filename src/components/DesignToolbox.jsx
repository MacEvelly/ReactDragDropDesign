import React from "react";
import DesignElement from "./DesignElement"
import { imgPaths } from "../data/DesignImages"

export default function DesignToolbox() {
    const images = imgPaths()
    return (
    <div className="designToolbox">
        {images.map( i => <DesignElement key={"DE_"+i.id} id={i.id} path={i.path} />)}
    </div>
    );
}