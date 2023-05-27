import { useState, useEffect, useMemo } from "react";
import { useDebounce } from "~/hooks";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "~/components/Button";
import CircleAvatar from "~/components/CircleAvatar";
import Divider from "~/components/Divider";
import { getStyle } from "~/utils";
import { exists } from "~/utils/https";

const cx = getStyle(require("./NewUserBox.module.scss").default);

function NewUserBox() {
    const [user, setUser] = useState("");
    const [nickname, setNickname] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");

    const debounceAvatar = useDebounce(avatarUrl, 300);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("avatar")}>
                    <CircleAvatar
                        size={200}
                        url={debounceAvatar === "" ? undefined : debounceAvatar}
                    />
                </div>
                <div className={cx("content")}>
                    <div className={cx("user")}>
                        <h5>User</h5>
                        <div className={cx("input")}>
                            <input
                                value={user}
                                onChange={e => setUser(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={cx("nickname")}>
                        <h5>Nickname</h5>
                        <div className={cx("input")}>
                            <input
                                value={nickname}
                                onChange={e => setNickname(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={cx("avatar-url")}>
                        <h5>Avatar</h5>
                        <div className={cx("input")}>
                            <input
                                type="url"
                                value={avatarUrl}
                                onChange={e => setAvatarUrl(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Divider size={30} />
            <Button primary beforeIcon={<FontAwesomeIcon icon={faFile} />}>
                Submit
            </Button>
        </div>
    );
}

export default NewUserBox;
