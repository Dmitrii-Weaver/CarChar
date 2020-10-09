import React, { Component, useState } from 'react'
import Display from './display.js'
import Btn from './btn.js'

function Stopwatch(props) {
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0, totalM: 1 })
    const [totalCost, setTotalCost] = useState({ totalCost: 0 })
    const [interv, setInterv] = useState({})
    const [status, setStatus] = useState(0)

    const calculatePrice = (props) => {
        if (props.usageCost == "free" || props.usageCost == "unknown") {
            setTotalCost({totalCost:"nothing!"})
        }
        else if (props.usageCost.includes("/min")) {
            let number = props.usageCost.substring(0, 4)
            
            let theNumber = parseFloat(number)
            console.log(theNumber)
            let updatedCost = time.totalM * theNumber
            setTotalCost({totalCost:updatedCost})
        }

        return totalCost
    }


    const start = () => {
        run()
        setStatus(1)
        setInterv(setInterval(run, 10))
    }


    let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h, updatedTotal = time.totalM
    const run = () => {

        if (updatedM == 59) {
            updatedH++
            updatedM = 0
        }
        if (updatedS == 59) {
            updatedM++
            updatedS = 0
            updatedTotal++
        }
        if (updatedMs == 99) {
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
        setTime({ ms: 0, s: 0, m: 0, h: 0, totalM:1})
        clearInterval(interv)
        setStatus(3)




    }
    const resume = () => start()


    return (
        <div className="holder">
            <div className="stopwatch">
                <Display time={time} status={status} totalCost={totalCost} />
                <Btn status={status} resume={resume} stop={stop} reset={reset} start={start} />
            </div>
        </div>
    )
}

export default Stopwatch;