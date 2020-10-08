
import React, { Component, useState } from 'react'
import styles from "./leftmenu.module.css"
import Stopwatch from './stopwatch.js'


export default class leftmenu extends Component {
    state = {
        buttonText: "Start charging",
        selectedSlot: null,
    }


    SelectSlot(Connection) {
        if (Connection) {
            this.setSelectedSlot(Connection)
            console.log(this.state.selectedSlot)
        }
    }
    setSelectedSlot(parameter) {
        this.setState({ selectedSlot: parameter })
    }



    render() {
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
                <div className={styles.menu} >
                    <h1 className={styles.text} >Name : {this.props.SelectedCharger.AddressInfo.Title}</h1>
                    <h3 className={styles.text}>Address : {this.props.SelectedCharger.AddressInfo.AddressLine1}</h3>
                    <h4 className={styles.text}>Access : {this.props.SelectedCharger.UsageType.Title}</h4>
                    <h4 className={styles.text}>Status : {this.props.SelectedCharger.StatusType.Title}</h4>
                    <h3 className={styles.text}>Connections : &#8203;
                    <select id={"SlotSelector"} >
                            <option value={"---"}> --- </option>
                            {
                                this.props.SelectedCharger.Connections.map(Connection => (<option value={Connection} onClick={() => this.SelectSlot(Connection)}>{Connection.ConnectionType.Title}</option>))
                            }
                        </select>
                    </h3>

                    <h3 className={styles.text}>Price : {this.props.SelectedCharger.UsageCost}</h3>

                        <Stopwatch />


                </div>
            )

        }
        return (
            output
        )
    }
}
