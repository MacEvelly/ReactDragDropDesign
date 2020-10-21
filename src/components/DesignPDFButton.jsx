import React from "react";
import jsPDF from 'jspdf';

export default function DesignPDFButton() {
    const makePDF = () =>{

        //var doc = new jsPDF();
        /*
        var specialElementHandlers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };
        var designCanvas = document.querySelector('.designCanvas').html()
        doc.fromHTML(designCanvas, 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });
        */
        /*
        doc.html(document.querySelector('.designCanvas'),{
            callback: (doc)=>{ doc.save() },
            filename: "brettsDesign.pdf",
            x: 10,
            y: 10
        });
        */
        var designCanvas = document.getElementsByClassName("designCanvas")
        console.log(designCanvas)

        var PDF = new jsPDF( 
            {
                unit: 'px',
                format: [500, 500],
            }
        );
        PDF.html(designCanvas[0], {
            callback: (doc)=> doc.save(),
            html2canvas:{
                background:"undefined",
            }
        });

        console.log("click")
    }
    return (
        <button onClick={makePDF}>Make PDF</button>
    );
}