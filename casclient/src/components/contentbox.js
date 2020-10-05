import React from 'react'
import styles from "./contentbox.module.css"
import Leftmenu from './leftmenu.js'
import MapBox from './mapbox.js'

export default function contentbox(props) {

    let CharData 
    
    return (
        <div className={styles.contentbox}>
            
            <h1 className={styles.header}>CarCharProject</h1>
            <div>
            <Leftmenu items={props.items} CharData={CharData} SelectedCharger={props.SelectedCharger}/>
            <MapBox items={props.items} CharData={CharData} SetSelectedCharger={props.SetSelectedCharger}/>
            </div>
        </div>
    )
}
