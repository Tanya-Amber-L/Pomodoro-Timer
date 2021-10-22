import {useState, useEffect} from "react";
import useInterval from "use-interval";

// eslint-disable-next-line no-empty-function
const noFunc = () => {};
export const useTimer = (
    initialSeconds,
    initialIsRunning = false,
    onFinished = noFunc,
) => {
    const [isRunning, setIsRunning] = useState(initialIsRunning);
    const [seconds, setSeconds] = useState(initialSeconds);

    useInterval(
        () => isRunning && setSeconds((value) => Math.max(value - 1, 0)),
        1000,
    );

    // useEffect takes 2 args: func + dependencies. if one of the dependencies value or state changes, the function will run
    useEffect(() => {
        if (seconds === 0) {
            setIsRunning(false);
            onFinished();
        }
    }, [seconds]);

    return [
        {isRunning, seconds},
        {setIsRunning, setSeconds},
    ];
};
