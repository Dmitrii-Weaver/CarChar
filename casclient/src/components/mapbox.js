import React from 'react'
import styles from "./mapbox.module.css"
import MapContainer from "./map.js"
export default function mapbox(props) {


    return (
        <div className={styles.mapbox}>
            
            <MapContainer items={props.items} CharData={props.CharData} SetSelectedCharger={props.SetSelectedCharger}/>
            
        </div>
    )
}
