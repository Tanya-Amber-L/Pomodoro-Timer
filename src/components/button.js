import React from "react";
import PropTypes from "prop-types";

const Button = ({label, title, disabled = false, onClick}) => {
    return (
        <>
            <button
                type={"button"}
                className={"button is-info is-medium is-fullwidth"}
                title={title || label}
                disabled={disabled}
                onClick={onClick}>
                {label}
            </button>
        </>
    );
};
Button.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};
export default Button;
