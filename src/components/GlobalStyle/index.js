import "./GlobalStyle.scss";
import PropTypes from "prop-types";

// Apply the style for children
function GlobalStyle({ children }) {
    return children;
}

GlobalStyle.propTypes = {
    children: PropTypes.element,
};

export default GlobalStyle;
