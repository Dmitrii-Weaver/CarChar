import React, { Component, useState } from 'react'
import Display from './display.js'
import Btn from './btn.js'

function Stopwatch() {
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 })
    const [interv, setInterv] = useState({})
    const [status, setStatus] = useState(0)

    const start = () => {
        run()
        setStatus(1)
        setInterv(setInterval(run, 10))
    }
    let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h
    const run = () => {
        if (updatedM == 59) {
            updatedH++
            updatedM = 0
        }
        if (updatedS == 59) {
            updatedM++
            updatedS = 0
        }
        if (updatedMs == 99) {
            updatedS++
            updatedMs = 0
        }
        updatedMs++
        return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH })
    }

    const stop = () => {
        clearInterval(interv)
        setStatus(2)
    }
    const reset = () => {
        clearInterval(interv)
        setStatus(0)
        setTime({ ms: 0, s: 0, m: 0, h: 0 })
 
    }
    const resume = () => start()


    return (
        <div className="holder">
            <div className="stopwatch">
                <Display time={time} />
                <Btn status={status} resume={resume} stop={stop} reset={reset} start={start} />
            </div>
        </div>
    )
}

export default Stopwatch;