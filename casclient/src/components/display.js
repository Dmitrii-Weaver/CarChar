import React from 'react'

export default function Display(props) {



    return (
        
        <div>
            {
                (props.status == 4 && props.slot == null) ?
                    <p>Please, choose connection</p> : ""
            }
            
            
            {
                (props.status !=3) ?
                
                <div>
                <span>{(props.time.h >= 10) ? props.time.h : "0" + props.time.h}</span>&nbsp;:&nbsp;
                <span>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}</span>&nbsp;:&nbsp;
                <span>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}</span>

                </div>: ""
            }
            {
                (props.slot != null && props.status !=3) ?
            <div>charging from {props.slot.ConnectionType.Title} located at {props.location}</div>: ""
            }
            
            {(props.status == 3 ) ?
        

                    <span>To pay : {props.totalCost.totalCost}</span> : ""
            }
            {
                (props.slot != null && props.status ==3) ?
            <div>for charging at {props.location}</div>: ""
            }
            
        </div>
    )
}
