import Display from "../components/display";
import Toolbar from "../components/toolbar";

const Pomodoro = () => {
    const timerSeconds = 1500;
    const isRunning = false;

    const handleMinus = () => {
        console.log("minus");
    };
    const handleReset = () => {
        console.log("reset");
    };
    const handlePlay = () => {
        console.log("play");
    };
    const handlePlus = () => {
        console.log("Plus");
    };
    return (
        <div className={"columns is-mobile is-centered"}>
            <div className={"column is-half"}>
                <Display seconds={timerSeconds} />
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
