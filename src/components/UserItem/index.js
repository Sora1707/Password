import PropTypes from "prop-types";

import { getStyle } from "~/utils";
import CircleAvatar from "../CircleAvatar";

const cx = getStyle(require("./UserItem.module.scss").default);

function UserItem({ avatar, user, nickname }) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("avatar")}>
                <CircleAvatar url={avatar} size={42} />
            </div>
            <div className={cx("content")}>
                <h4 className={cx("username")}>{user}</h4>
                <small className={cx("nickname")}>{`${
                    nickname ? nickname : user
                }`}</small>
            </div>
        </div>
    );
}

UserItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
};

export default UserItem;
