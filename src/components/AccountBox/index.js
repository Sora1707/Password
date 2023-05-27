import { getStyle } from "~/utils";
import CircleAvatar from "../CircleAvatar";
import { appIcons } from "~/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCopy,
    faDeleteLeft,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import users from "~/database/users.json";
import { useRef, useState } from "react";

const cx = getStyle(require("./AccountBox.module.scss").default);

function AccountBox({ account }) {
    const app = appIcons[account.app] ? account.app : "default";
    const { title, user, username, password } = account;
    const { nickname, avatar } = users[user];

    const usernameRef = useRef();
    const [usernameValue, setUsernameValue] = useState(username);
    const [usernameReadOnly, setUsernameReadOnly] = useState(true);

    const passwordRef = useRef();
    const [passwordValue, setPasswordValue] = useState(password);
    const [passwordReadOnly, setPasswordReadOnly] = useState(true);

    // HANDLE EVENT
    const save = () => {};

    const copyToClipboard = element => {
        const input = element.querySelector("input");

        // Select the text field
        input.select();
        input.setSelectionRange(0, 99999); // For mobile devices
        // Copy the text inside the text field
        navigator.clipboard.writeText(input.value);
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("delete-icon", "icon")}>
                <FontAwesomeIcon icon={faTrash} />
            </div>
            <div className={cx("display-field")}>
                <div className={cx("app-field", "icon")}>
                    <div className={cx("app-icon")}>
                        <FontAwesomeIcon {...appIcons[app]} />
                    </div>
                    <h4 className={cx("app-title")}>{title}</h4>
                </div>
                <div className={cx("user-field")}>
                    <div className={cx("avatar")}>
                        <CircleAvatar size={42} url={avatar} />
                    </div>
                    <div className={cx("content")}>
                        <h4 className={cx("user")}>{user}</h4>
                        <small className={cx("nickname")}>
                            {nickname ? nickname : user}
                        </small>
                    </div>
                </div>
            </div>
            <div className={cx("data-field")}>
                <div className={cx("username")}>
                    <h5>Username: </h5>
                    <div ref={usernameRef} className={cx("input")}>
                        <input
                            value={usernameValue}
                            readOnly={usernameReadOnly}
                            onChange={e => setUsernameValue(e.target.value)}
                            onDoubleClick={e => {
                                setUsernameReadOnly(false);
                                usernameRef.current.classList.add(cx("active"));
                                setTimeout(() => {
                                    e.target.setSelectionRange(
                                        e.target.value.length,
                                        e.target.value.length
                                    );
                                }, 0);
                            }}
                            onBlur={e => {
                                setUsernameReadOnly(true);
                                usernameRef.current.classList.remove(
                                    cx("active")
                                );
                                save();
                            }}
                            onKeyDown={e => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    setUsernameReadOnly(true);
                                    usernameRef.current.classList.remove(
                                        cx("active")
                                    );
                                    save();
                                }
                            }}
                        />
                        <div
                            className={cx("icon")}
                            onClick={e => copyToClipboard(usernameRef.current)}
                        >
                            <FontAwesomeIcon icon={faCopy} />
                        </div>
                    </div>
                </div>
                <div className={cx("password")}>
                    <h5>Password: </h5>
                    <div ref={passwordRef} className={cx("input")}>
                        <input
                            type={passwordReadOnly ? "password" : "text"}
                            value={passwordValue}
                            readOnly={passwordReadOnly}
                            onChange={e => setPasswordValue(e.target.value)}
                            onDoubleClick={e => {
                                setPasswordReadOnly(false);
                                passwordRef.current.classList.add(cx("active"));
                                setTimeout(() => {
                                    e.target.setSelectionRange(
                                        e.target.value.length,
                                        e.target.value.length
                                    );
                                }, 0);
                            }}
                            onBlur={e => {
                                setPasswordReadOnly(true);
                                passwordRef.current.classList.remove(
                                    cx("active")
                                );
                                save();
                            }}
                            onKeyDown={e => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    setPasswordReadOnly(true);
                                    passwordRef.current.classList.remove(
                                        cx("active")
                                    );
                                    save();
                                }
                            }}
                        />
                        <div
                            className={cx("icon")}
                            onClick={e => copyToClipboard(passwordRef.current)}
                        >
                            <FontAwesomeIcon icon={faCopy} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountBox;
