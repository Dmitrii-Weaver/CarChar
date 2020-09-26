import React from 'react'
import styles from "./mapbox.module.css"
import Map from "./map.js"
export default function mapbox() {


    return (
        <div className={styles.mapbox}>
            <Map />
        </div>
    )
}
