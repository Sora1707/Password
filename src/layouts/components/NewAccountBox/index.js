import { useState, useEffect, useMemo } from "react";
import { useDebounce } from "~/hooks";
import { faFile, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "~/components/Button";
import CircleAvatar from "~/components/CircleAvatar";
import Divider from "~/components/Divider";
import Input from "~/components/Input";
import { getStyle } from "~/utils";
import { capitalString } from "~/utils/string";
import { userSearch } from "~/services/search";
import { appIcons } from "~/utils";

const cx = getStyle(require("./NewAccountBox.module.scss").default);
const defaultAvatar = require("~/constants.json").imageUrl.defaultAvatar;
const supportedApps = require("~/constants.json").supportedApp;

function NewAccountBox() {
    const users = useMemo(() => userSearch(""), []);
    const [userIndex, setUserIndex] = useState(0);
    const [app, setApp] = useState(supportedApps[0].app);
    const [title, setTitle] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [user, { avatar, nickname }] = users[userIndex];

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("user")}>
                    <div className={cx("avatar")}>
                        <CircleAvatar size={75} url={avatar} />
                    </div>
                    <div className={cx("content")}>
                        <select
                            className={cx("select")}
                            onChange={e =>
                                setUserIndex(parseInt(e.target.value))
                            }
                        >
                            {users.map(([user, data], index) => {
                                return (
                                    <option value={index} key={user}>
                                        {capitalString(user)}
                                    </option>
                                );
                            })}
                        </select>
                        <small className={cx("nickname")}>
                            {!nickname ? user : nickname}
                        </small>
                    </div>
                </div>
                <div className={cx("app")}>
                    <div className={cx("app-icon", "icon")}>
                        <FontAwesomeIcon {...appIcons[app]} />
                    </div>
                    <select
                        className={cx("select")}
                        onChange={e => setApp(e.target.value)}
                    >
                        {supportedApps.map(({ app }) => {
                            return (
                                <option value={app} key={app}>
                                    {capitalString(app)}
                                </option>
                            );
                        })}
                        <option value="default">Other</option>
                    </select>
                </div>
                <div className={cx("title")}>
                    <h5>Title</h5>
                    <Input
                        value={title}
                        placeholder="Enter the title for your account"
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className={cx("username")}>
                    <h5>Username</h5>
                    <Input
                        type="email"
                        value={username}
                        placeholder="Email, username or phone number"
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className={cx("password")}>
                    <h5>Password</h5>
                    <Input
                        placeholder="Enter your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <Divider size={10} />

            <Button primary beforeIcon={<FontAwesomeIcon icon={faFile} />}>
                Submit
            </Button>
        </div>
    );
}

export default NewAccountBox;
