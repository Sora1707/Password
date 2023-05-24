import PropTypes from "prop-types";

import { getStyle } from "~/utils";

const cx = getStyle(require("./Button.module.scss").default);
const defaultFunc = () => {};

function Button({
    children,
    onClick = defaultFunc,
    primary,
    plain,
    beforeIcon,
    afterIcon,
}) {
    const classes = cx("button", { primary, plain });
    return (
        <button className={classes} onClick={onClick}>
            {beforeIcon}
            <span>{children}</span>
            {afterIcon}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    beforeIcon: PropTypes.node,
    afterIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
