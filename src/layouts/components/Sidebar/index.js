import UserItem from "~/components/UserItem";
import { getStyle } from "~/utils";
import { userSearch } from "~/services/search";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const cx = getStyle(require("./Sidebar.module.scss").default);

const ALL_AVATAR = "https://cdn-icons-png.flaticon.com/512/5110/5110770.png";
const users = userSearch("");

function Sidebar() {
    const location = useLocation();

    const userPath = location.pathname.split("/").at(-1);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("temp")}></div>
            <div className={cx("sidebar")}>
                <h5 className={cx("title")}>Users</h5>
                <div className={cx("content")}>
                    <UserItem
                        filter
                        active={userPath === "all"}
                        avatar={ALL_AVATAR}
                        user={"all"}
                        nickname={"Get all user"}
                    />
                    {users.map(([user, { avatar, nickname }]) => {
                        return (
                            <UserItem
                                filter
                                active={userPath === user}
                                key={user}
                                {...{ user, avatar, nickname }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
