import React from 'react'
import styles from "./leftmenu.module.css"

export default function leftmenu(props) {

    let output = (
        <div className={styles.menu}>
            <h1>Name : {}</h1>
            <h3>Type : {}</h3>
            <h3>Speed : {}</h3>
            <h3>Pricing method : </h3>
            <h3>Price : {}</h3>
            <h2>{}</h2>
        </div>
    )
    if (props.SelectedCharger != null) {


        output = (
            <div className={styles.menu}>
                <h1>Name : {props.SelectedCharger.name}</h1>
                <h3>Type : {props.SelectedCharger.type}</h3>
                <h3>Speed : {props.SelectedCharger.speed}</h3>
                <h3>Pricing method : </h3>
                <h3>Price : {props.SelectedCharger.price}</h3>
                <h2>{props.SelectedCharger.taken}</h2>
            </div>
        )

    }

    return (
        output
    )
}
