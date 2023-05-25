import { getStyle } from "~/utils";
import CircleAvatar from "../CircleAvatar";
import { appIcons } from "~/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const cx = getStyle(require("./AccountBox.module.scss").default);

function AccountBox({ app }) {
    const icon = app ? appIcons[app] : appIcons.default;

    return (
        <div className={cx("wrapper")}>
            <div className={cx("display-field")}>
                <div className={cx("app-field", "icon")}>
                    <div className={cx("app-icon")}>
                        <FontAwesomeIcon icon={icon} />
                    </div>
                    <h4 className={cx("app-name")}>Facebook Main</h4>
                </div>
                <div className={cx("user-field")}>
                    <div className={cx("avatar")}>
                        <CircleAvatar size={42} />
                    </div>
                    <div className={cx("content")}>
                        <h4 className={cx("user")}>Sora</h4>
                        <small className={cx("nickname")}>soravn</small>
                    </div>
                </div>
            </div>
            <div className={cx("data-field")}>
                <div className={cx("username")}>
                    <h5>Username: </h5>
                    <div className={cx("input")}>
                        <input />
                        <div className={cx("icon")}>
                            <FontAwesomeIcon icon={faCopy} />
                        </div>
                    </div>
                </div>
                <div className={cx("password")}>
                    <h5>Password: </h5>
                    <div className={cx("input")}>
                        <input type="password" />
                        <div className={cx("icon")}>
                            <FontAwesomeIcon icon={faCopy} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountBox;
