import React, {useCallback} from "react";
import PropTypes from "prop-types";
import {createPortal} from "react-dom";
import {useTimer} from "../hooks/use-timer";

import Button from "./button";
import Display from "./display";

const defaultBreakDuration = 300;

const Modal = ({onClose, onRestart}) => {
    const [{seconds}, {setIsRunning}] = useTimer(
        defaultBreakDuration,
        true,
        onRestart,
    );

    return createPortal(
        <div className={"modal-overlay"}>
            <div className={"box"}>
                <h4>{"Timer is over!"}</h4>
                <p>{"Take a short break."}</p>
                <Display seconds={seconds} />
                <div className={"is-flex"}>
                    <Button
                        label={"Stop"}
                        onClick={() => {
                            setIsRunning(false);
                            onClose();
                        }}
                    />
                    <Button
                        label={"Restart"}
                        onClick={() => {
                            setIsRunning(false);
                            onRestart();
                        }}
                    />
                </div>
            </div>
        </div>,
        document.getElementById("modal"),
    );
};
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    onRestart: PropTypes.func.isRequired,
};
export default Modal;
