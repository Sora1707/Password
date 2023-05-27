import PropTypes from "prop-types";

function Divider({ size }) {
    return <div style={{ marginTop: `${size}px` }}></div>;
}

Divider.propTypes = {
    size: PropTypes.number.isRequired,
};

export default Divider;
