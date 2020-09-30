import React from 'react'
import styles from "./mapbox.module.css"
import MapContainer from "./map.js"
export default function mapbox() {


    return (
        <div className={styles.mapbox}>
            <MapContainer />
        </div>
    )
}
