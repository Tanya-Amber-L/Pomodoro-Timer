import React from "react";
import PropTypes from "prop-types";

const Cyphers = ({value}) => {
    return (
        <>
            <span>{String(value).padStart(2, "0")}</span>
        </>
    );
};
// padStart(targetLength, padString) ->
// Length of the resulting string once the current str has been padded. If the value is less than str.length, then str is returned as-is.
// + The string to pad the current str with
Cyphers.propTypes = {
    value: PropTypes.number.isRequired,
};
export default Cyphers;
