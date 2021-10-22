import {useTimer} from "../hooks/use-timer";
import Display from "../components/display";
import Toolbar from "../components/toolbar";

const defaultSessionDuration = 3;

const Pomodoro = () => {
    const [{isRunning, seconds}, {setIsRunning, setSeconds}] = useTimer(
        defaultSessionDuration,
        false,
        () => console.log("Timer finished"),
    );

    const handleMinus = () => {
        setSeconds((value) => Math.max(value - 60, 0)); //When it's less than 0, use zero (don't go in minus timer)
        // Better to set the function on the current value that we will have, than on the initial value
    };
    const handleReset = () => {
        setSeconds(defaultSessionDuration);
    };
    const handlePlay = () => {
        setIsRunning(!isRunning);
    };
    const handlePlus = () => {
        setSeconds((value) => value + 60);
    };
    return (
        <div className={"columns is-mobile is-centered"}>
            <div className={"column is-half"}>
                <Display seconds={seconds} />
                <Toolbar
                    isRunning={isRunning}
                    onMinus={handleMinus}
                    onReset={handleReset}
                    onPlay={handlePlay}
                    onPlus={handlePlus}
                />
            </div>
        </div>
    );
};
export default Pomodoro;
