import React, { Component, useState } from 'react'
import Display from './display.js'
import Btn from './btn.js'
import styles from "./stopwatch.module.css"

function Stopwatch(props) {
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0, totalM: 1 })
    const [totalCost, setTotalCost] = useState({ totalCost: 0 })
    const [interv, setInterv] = useState({})
    const [status, setStatus] = useState(0)
    const [location, setLocation] = useState("-")
    const [usageCost, setUsageCost] = useState()

    const calculatePrice = (props) => {
        if (usageCost == "free" || usageCost == "unknown") {
            setTotalCost({ totalCost: "nothing!" })
        }
        else if (usageCost.includes("/min") && !usageCost.includes("1€ per started charge")) {
            let number = usageCost.substring(0, 4)

            let theNumber = parseFloat(number)
            console.log(theNumber)
            let updatedCost = (time.totalM * theNumber) + "e"
            setTotalCost({ totalCost: updatedCost })
        }
        else if (usageCost.includes("/min") && usageCost.includes("1€ per started charge")) {
            let number = usageCost.substring(0, 4)

            let theNumber = parseFloat(number)
            console.log(theNumber)
            let updatedCost = (time.totalM * theNumber) + 1 + "e"
            setTotalCost({ totalCost: updatedCost })
        }
        else if (usageCost.includes("/kWh")) {
            if (props.selectedSlot != null) {
                let number = usageCost.substring(0, 4)
                let theNumber = parseFloat(number)

                let power = props.selectedSlot.PowerKW
                let timeInHours = time.totalM / 60
                let usedPower = power * timeInHours
                let updatedCost = (usedPower * theNumber)
                updatedCost = updatedCost.toFixed(2) + "e"
                setTotalCost({ totalCost: updatedCost })
            }
            else {
                setTotalCost({ totalCost: "no slot selected!" })
            }
        }

        return totalCost
    }


    const start = () => {
        setLocation(props.SelectedCharger.AddressInfo.Title)
        setUsageCost(props.usageCost)
        if (props.selectedSlot == null) {
            setStatus(4)
        }
        else {
            run()
            setStatus(1)
            setInterv(setInterval(run, 10))
        }
    }
    
    


    let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h, updatedTotal = time.totalM
    const run = () => {

        if (updatedM == 60) {
            updatedH++
            updatedM = 0
        }
        if (updatedS == 60) {
            updatedM++
            updatedS = 0
            updatedTotal++
        }
        if (updatedMs == 100) {
            updatedS++
            updatedMs = 0
        }
        updatedMs++
        return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH, totalM: updatedTotal })
    }

    const stop = () => {
        clearInterval(interv)
        setStatus(2)
    }
    const reset = () => {
        calculatePrice(props)
        setTime({ ms: 0, s: 0, m: 0, h: 0, totalM: 1 })
        clearInterval(interv)
        setStatus(3)




    }
    const resume = () => start()


    return (
        <div className={styles.holder}>
            <div >
                <Display time={time} status={status} selectedSlot={props.selectedSlot} totalCost={totalCost} location={location} />
                <Btn status={status} resume={resume} stop={stop} reset={reset} start={start}  />
            </div>
        </div>
    )
}

export default Stopwatch;