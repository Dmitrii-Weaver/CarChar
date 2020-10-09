import React from 'react'

export default function btn(props) {
    
    return (
        <div>
            {(props.status == 0) ?
                <button onClick={props.start}>Start</button> : ""

            }
            {(props.status == 1) ?
                <div>
                    <button onClick={props.stop}>Pause</button>
                    <button onClick={props.reset}>Stop</button>
                </div> : ""
            }
            {(props.status == 2) ?
                <div>
                    <button onClick={props.resume}>Resume</button>
                    <button onClick={props.reset }>Stop</button>
                </div> : ""
            }
            {(props.status == 3) ?

                <button onClick={props.start}>Start</button> : ""

            }
        </div>
    )
}
