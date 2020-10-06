import { render } from '@testing-library/react'
import React, { Component } from 'react'
import styles from "./leftmenu.module.css"


    

export default class leftmenu extends Component {
   state = {
       buttonText:"Start charging",
        selectedSlot: null
   }
    

SelectSlot(Connection){
    this.selectedSlot = Connection
    console.log(this.selectedSlot)
}


render(){
    let output = (
        <div className={styles.menu}>
            <h1 className={styles.text}>Name : </h1>
            <h3 className={styles.text}>Address : </h3>
            <h4 className={styles.text}>Access :</h4>
            <h4 className={styles.text}>Status : </h4>
            <h3 className={styles.text}>Connections :</h3>
            <h3 className={styles.text}>Price : </h3>
        </div>
    )
    if (this.props.SelectedCharger != null) {


        output = (
            <div className={styles.menu}>
                <h1 className={styles.text} >Name : {this.props.SelectedCharger.AddressInfo.Title}</h1>
                <h3 className={styles.text}>Address : {this.props.SelectedCharger.AddressInfo.AddressLine1}</h3>
                <h4 className={styles.text}>Access : {this.props.SelectedCharger.UsageType.Title}</h4>
                <h4 className={styles.text}>Status : {this.props.SelectedCharger.StatusType.Title}</h4>
                <h3 className={styles.text}>Connections :</h3>

                {
                    this.props.SelectedCharger.Connections.map(Connection => (<li className={styles.list} onClick={() => this.SelectSlot(Connection)}>{Connection.ConnectionType.Title}</li>))
                }

                <h3 className={styles.text}>Price : {this.props.SelectedCharger.UsageCost}</h3>
                <button id={"ChargeButton"} onClick={() => this.startCharging()} >{this.state.buttonText}</button>
            </div>
        )

    }
    return (
        output
    )}
}
