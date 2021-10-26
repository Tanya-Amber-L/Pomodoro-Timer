import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = ({label, title, disabled = false, onClick}) => {
    return (
        <StyledButton
            type={"button"}
            className={""}
            title={title || label}
            disabled={disabled}
            onClick={onClick}>
            {label}
        </StyledButton>
    );
};
Button.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    transition: 0.3s;
    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

export default Button;
