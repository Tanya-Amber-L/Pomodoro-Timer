import React from "react";
import PropTypes from "prop-types";
import {createPortal} from "react-dom";
import {useTimer} from "../hooks/use-timer";

import Button from "./button";
import Display from "./display";
import styled from "styled-components";

const defaultBreakDuration = 300;

const Modal = ({onClose, onRestart}) => {
    const [{seconds}, {setIsRunning}] = useTimer(
        defaultBreakDuration,
        true,
        onRestart,
    );

    return createPortal(
        <ModalContainer>
            <ModalContent>
                <h4>{"Timer is over!"}</h4>
                <p>{"Take a short break."}</p>
                <Display seconds={seconds} />
                <ModalButtonsContainer>
                    <Button
                        label={"STOP"}
                        onClick={() => {
                            setIsRunning(false);
                            onClose();
                        }}
                    />
                    <Button
                        label={"RESTART"}
                        onClick={() => {
                            setIsRunning(false);
                            onRestart();
                        }}
                    />
                </ModalButtonsContainer>
            </ModalContent>
        </ModalContainer>,
        document.getElementById("modal"),
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    onRestart: PropTypes.func.isRequired,
};

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.6);
`;
const ModalContent = styled.div`
    background-color: #3d475a;
    padding: 2rem;
    border-radius: 10px;
`;
const ModalButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export default Modal;
