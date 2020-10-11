import React from 'react'

export default function btn(props) {

    return (
        <div>
            {(props.status == 0) ?
                <button onClick={props.start}>Select</button> : ""

            }
            {(props.status == 1) ?
                <div>
                    <button onClick={props.stop}>Pause</button>
                    <button onClick={props.reset}>Stop charging</button>
                </div> : ""
            }
            {(props.status == 2) ?
                <div>
                    <button onClick={props.resume}>Resume</button>
                    <button onClick={props.reset}>Stop charging</button>
                </div> : ""
            }
            {(props.status == 3) ?

                <button onClick={props.start}>Start charging</button> : ""

            }
            {(props.status == 4) ?

                <button onClick={props.start}>Start charging</button> : ""

            }
        </div>
    )
}
