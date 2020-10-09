import React from 'react'

export default function Display(props) {



    return (
        
        <div>
            
            
            {
                (props.status !=3) ?
                
                <div>
                <span>{(props.time.h >= 10) ? props.time.h : "0" + props.time.h}</span>&nbsp;:&nbsp;
                <span>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}</span>&nbsp;:&nbsp;
                <span>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}</span>&nbsp;:&nbsp;
                <span>{(props.time.ms >= 10) ? props.time.ms : "0" + props.time.ms}</span> 
                </div>: ""
            }
            
            {(props.status == 3) ?
        

                    <span>To pay : {props.totalCost.totalCost}e</span> : ""
            }
        </div>
    )
}
