import PropTypes from "prop-types";
import { Fragment, createElement } from "react";
import { Link } from "react-router-dom";

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
    to,
    href,
}) {
    const classes = cx("button", { primary, plain });
    const Component = href ? "a" : Link;

    return (
        <button className={classes} onClick={onClick}>
            <Component className={cx("link")} to={to} href={href}>
                {beforeIcon}
                <span>{children}</span>
                {afterIcon}
            </Component>
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    beforeIcon: PropTypes.node,
    afterIcon: PropTypes.node,
    onClick: PropTypes.func,
    to: PropTypes.string,
    href: PropTypes.string,
};

export default Button;
