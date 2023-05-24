import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getStyle } from "~/utils";
import { appIcons } from "~/utils";

const cx = getStyle(require("./AccountItem.module.scss").default);

function AccountItem({ title, user, app = "default" }) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("icon")}>
                <FontAwesomeIcon {...appIcons[app]} />
            </div>
            <div className={cx("content")}>
                <h4 className={cx("title")}>{title}</h4>
                <small className={cx("user")}>{user}</small>
            </div>
        </div>
    );
}

AccountItem.propTypes = {
    title: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    app: PropTypes.string,
};

export default AccountItem;
