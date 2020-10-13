import React from 'react'
import styles from "./contentbox.module.css"
import Leftmenu from './leftmenu.js'
import MapBox from './mapbox.js'
import { Redirect, Route } from "react-router-dom";
export default function contentbox(props) {
    

    let CharData
    let output

    if (props.isLoggedIn == true){
        output = (
            <div className={styles.contentbox}>

            <h1 className={styles.header}>CarCharProject</h1>
            <div>
                
            
                <Leftmenu
                    items={props.items}
                    CharData={CharData}
                    SelectedCharger={props.SelectedCharger}
                    chargingIsOn={props.chargingIsOn}
                    SetChargingIsOn={props.SetChargingIsOn}

                    searchResult={props.searchResult}
                    SetSearchResult={props.SetSearchResult}
                />
                <MapBox
                    items={props.items}
                    CharData={CharData}
                    searchResult={props.searchResult}
                    SetSelectedCharger={props.SetSelectedCharger}
                />
            </div>
        </div>
        )
    }
    else {
        output =  <Redirect to='/' />
    }

    return (
       output
    )
}
