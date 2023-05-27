import PropTypes from "prop-types";

import { getStyle } from "~/utils";
import CircleAvatar from "../CircleAvatar";
import { Link } from "react-router-dom";

const cx = getStyle(require("./UserItem.module.scss").default);

function UserItem({ avatar, user, nickname, active, filter }) {
    const to = filter ? `/filter/${user}` : `/user/${user}`;

    return (
        <Link to={to} className={cx("wrapper")}>
            <div className={cx("avatar")}>
                <CircleAvatar url={avatar} size={42} />
            </div>
            <div className={cx("content")}>
                <h4 className={cx("username", { active })}>{user}</h4>
                <small className={cx("nickname", { active })}>{`${
                    nickname ? nickname : user
                }`}</small>
            </div>
        </Link>
    );
}

UserItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
};

export default UserItem;
