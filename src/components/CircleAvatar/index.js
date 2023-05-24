import { getStyle } from "~/utils";
import PropTypes from "prop-types";

const { defaultAvatar } = require("~/constants.json").imageUrl;
const cx = getStyle(require("./CircleAvatar.module.scss").default);

function CircleAvatar({ url = defaultAvatar, size = 48 }) {
    return (
        <div
            className={cx("avatar")}
            style={{
                width: size,
                height: size,
            }}
        >
            <img src={url} alt="" />
        </div>
    );
}

CircleAvatar.propTypes = {
    url: PropTypes.string,
    size: PropTypes.number,
};

export default CircleAvatar;
