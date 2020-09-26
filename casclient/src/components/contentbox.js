import React from 'react'
import styles from "./contentbox.module.css"
import Leftmenu from './leftmenu.js'
import Map from './mapbox.js'

export default function contentbox() {
    return (
        <div className={styles.contentbox}>
            <h1 >CarCharProject</h1>
            <div>
            <Leftmenu />
            <Map />
            </div>
        </div>
    )
}
