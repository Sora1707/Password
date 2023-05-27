import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getStyle } from "~/utils";
import { appIcons } from "~/utils";
import { Link } from "react-router-dom";

const cx = getStyle(require("./AccountItem.module.scss").default);

function AccountItem({ title, user, id, app = "default" }) {
    if (!appIcons[app]) {
        app = "default";
    }

    return (
        <Link to={`/account/${id}`} className={cx("wrapper")}>
            <div className={cx("icon")}>
                <FontAwesomeIcon {...appIcons[app]} />
            </div>
            <div className={cx("content")}>
                <h4 className={cx("title")}>{title}</h4>
                <small className={cx("user")}>{user}</small>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    title: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    app: PropTypes.string,
};

export default AccountItem;
