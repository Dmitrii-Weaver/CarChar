import React from 'react'
import styles from "./contentbox.module.css"
import Leftmenu from './leftmenu.js'
import MapBox from './mapbox.js'

export default function contentbox(props) {
    return (
        <div className={styles.contentbox}>
            
            <h1 className={styles.header}>CarCharProject</h1>
            <div>
            <Leftmenu />
            <MapBox items={props.items}/>
            </div>
        </div>
    )
}
