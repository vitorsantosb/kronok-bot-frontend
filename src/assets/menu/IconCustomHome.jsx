import PropTypes from "prop-types";
import React from "react";
function IconCustomHome({ size, style }) {
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
                d="M9.99996 2.23145C9.23857 2.23145 8.49174 2.44007 7.84058 2.83466L3.67392 5.35966C3.0612 5.73095 2.55456 6.25397 2.20295 6.87819C1.85133 7.50241 1.66661 8.20675 1.66663 8.92318V14.1665C1.66663 15.2716 2.10561 16.3314 2.88701 17.1128C3.66842 17.8942 4.72822 18.3332 5.83329 18.3332H14.1666C15.2717 18.3332 16.3315 17.8942 17.1129 17.1128C17.8943 16.3314 18.3333 15.2716 18.3333 14.1665V8.92235C18.3331 8.20608 18.1483 7.50176 17.7967 6.87774C17.4451 6.25372 16.9386 5.73087 16.326 5.35966L12.1593 2.83466C11.5082 2.44008 10.7613 2.23145 9.99996 2.23145ZM8.70434 4.26003C9.09504 4.02328 9.54313 3.89811 9.99996 3.89811C10.4568 3.89811 10.9049 4.02328 11.2956 4.26003L15.4622 6.78503C15.8298 7.00776 16.1337 7.32147 16.3447 7.69589C16.5556 8.07025 16.6665 8.49266 16.6666 8.92235V14.1665C16.6666 14.8296 16.4032 15.4654 15.9344 15.9343C15.4655 16.4031 14.8297 16.6665 14.1666 16.6665H13.3333V14.1665C13.3333 13.2825 12.9821 12.4346 12.357 11.8095C11.7319 11.1844 10.884 10.8332 9.99996 10.8332C9.1159 10.8332 8.26806 11.1844 7.64294 11.8095C7.01781 12.4346 6.66663 13.2825 6.66663 14.1665V16.6665H5.83329C5.17025 16.6665 4.53437 16.4031 4.06553 15.9343C3.59668 15.4654 3.33329 14.8296 3.33329 14.1665V8.92318C3.33328 8.49332 3.44412 8.07069 3.65509 7.69616C3.86605 7.32163 4.17003 7.00782 4.53767 6.78504L8.70434 4.26003ZM11.1785 12.988C11.491 13.3006 11.6666 13.7245 11.6666 14.1665V16.6665H8.33329V14.1665C8.33329 13.7245 8.50889 13.3006 8.82145 12.988C9.13401 12.6754 9.55793 12.4999 9.99996 12.4999C10.442 12.4999 10.8659 12.6754 11.1785 12.988Z"
                style={style}
            />
        </svg>
    );
}

IconCustomHome.propTypes = {
    size: PropTypes.object,
    style: PropTypes.object,
};

export default IconCustomHome;
