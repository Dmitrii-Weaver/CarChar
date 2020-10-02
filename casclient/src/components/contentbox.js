import React from 'react'
import styles from "./contentbox.module.css"
import Leftmenu from './leftmenu.js'
import Map from './mapbox.js'

export default function contentbox(props) {
    return (
        <div className={styles.contentbox}>
            {
                console.log(props.items)
            }
            <h1 className={styles.header}>CarCharProject</h1>
            <div>
            <Leftmenu />
            <Map/>
            </div>
        </div>
    )
}
