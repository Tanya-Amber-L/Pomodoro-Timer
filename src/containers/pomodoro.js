import {useCallback, useState} from "react";
import {useTimer} from "../hooks/use-timer";

import Display from "../components/display";
import Toolbar from "../components/toolbar";
import Modal from "../components/modal";

const defaultSessionDuration = 1500;

const Pomodoro = () => {
    const [showModal, setShowModal] = useState(false);
    const [{isRunning, seconds}, {setIsRunning, setSeconds}] = useTimer(
        defaultSessionDuration,
        false,
        () => setShowModal(true),
    );

    const handleMinus = useCallback(
        // Better to set the function on the current value that we will have, than on the initial value
        () => setSeconds((value) => Math.max(value - 60, 0)), //When it's less than 0, use zero (don't go in minus timer)
        [setSeconds],
    );
    const handleReset = useCallback(
        () => setSeconds(defaultSessionDuration),
        [setSeconds],
    );
    const handlePlay = useCallback(
        () => setIsRunning((value) => !value),
        [setIsRunning],
    );
    const handlePlus = useCallback(
        () => setSeconds((value) => value + 60),
        [setSeconds],
    );
    // All the Pomodoro function is executed everytime some param changes, aka every second. Without UseCallback, we are redeclaring the little handling function for each button, everytime.
    // UseCallback works as UseEffect and is gonna be redeclared only when necessary, when the dependency (useState functions) changes

    const handleCloseModal = useCallback(() => {
        setShowModal(false);
        handleReset();
    }, [setSeconds]);
    const handleRestart = useCallback(() => {
        handleCloseModal();
        handlePlay();
    }, [setSeconds]);

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
            {showModal && (
                <Modal onClose={handleCloseModal} onRestart={handleRestart} />
            )}
        </div>
    );
};
export default Pomodoro;
