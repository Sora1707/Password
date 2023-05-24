import PropTypes from "prop-types";

import { getStyle } from "~/utils";

const cx = getStyle(require("./Wrapper.module.scss").default);

function PopperWrapper({ children }) {
    return <div className={cx("wrapper")}>{children}</div>;
}

PopperWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PopperWrapper;
