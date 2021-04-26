import React from "react";
import Clock from 'react-digital-clock';

import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
        return <div className="timer">Too lale...</div>;
    }

    return (
        <div className="timer">
            <div className="text_text">Remaining</div>
            <div className="value_value">{remainingTime}</div>
            <div className="text_text">seconds</div>
        </div>
    );
};



const Timer = () => {
    return (
        <div>
            <CountdownCircleTimer
                isPlaying
                duration={10}
                colors={[
                    ['#004777', 0.25],
                    ['#F7B801', 0.25],
                    ['#A30000', 0.25],
                    ['#6960EC', 0.25]
                ]}
                onComplete={() => [true, 1000]}
            >
                {renderTime}
            </CountdownCircleTimer>
            <br />
            <button className="btn btn-primary"> primary </button>
            <br />
            <br />
            <button className="btn btn-warning"> warning </button>
            <br />
            <br />
            <button className="btn btn-outline-danger">danger</button>
        </div>
    );
}


// const Timer = ()=>{
//     return(
//         <Clock />
//     );
// }


export default Timer;