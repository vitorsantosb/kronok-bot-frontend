import PropTypes from "prop-types";
import React from "react";
function IconCustomPlans({ size, style }) {
    style = {
        ...style,
        fillOpacity: 0.5,
    };
    const viewBox = `0 0 ${size.width} ${size.height}`;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} width={size.width} height={size.height} style={style}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 1.66666C12.6463 1.66666 12.3072 1.80714 12.0571 2.05719C11.8071 2.30724 11.6666 2.64638 11.6666 3V6.66666H7.99996C7.64634 6.66666 7.3072 6.80714 7.05715 7.05719C6.8071 7.30724 6.66663 7.64638 6.66663 8V12.5H2.99996C2.64634 12.5 2.3072 12.6405 2.05715 12.8905C1.8071 13.1406 1.66663 13.4797 1.66663 13.8333V17C1.66663 17.3536 1.8071 17.6928 2.05715 17.9428C2.3072 18.1929 2.64634 18.3333 2.99996 18.3333H17C17.3536 18.3333 17.6927 18.1929 17.9428 17.9428C18.1928 17.6928 18.3333 17.3536 18.3333 17V3C18.3333 2.64638 18.1928 2.30724 17.9428 2.05719C17.6927 1.80714 17.3536 1.66666 17 1.66666H13ZM8.33329 8.33333H11.6666V16.6667H8.33329V8.33333ZM16.6666 16.6667H13.3333V3.33333H16.6666V16.6667ZM6.66663 14.1667V16.6667H3.33329V14.1667H6.66663Z"
                style={style}
            />
        </svg>
    );
}

IconCustomPlans.propTypes = {
    size: PropTypes.object,
    style: PropTypes.object,
};

export default IconCustomPlans;
