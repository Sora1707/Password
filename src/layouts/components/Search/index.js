// MODULES
import {
    faCircleXmark,
    faSearch,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";

// LOCAL MODULES/FILE
import { getStyle } from "~/utils";
import { PopperWrapper } from "~/components/Popper";
import CircleAvatar from "~/components/CircleAvatar";
import UserItem from "~/components/UserItem";
import AccountItem from "~/components/AccountItem";

// VARIABLES
const cx = getStyle(require("./Search.module.scss").default);
const users = require("~/database/users.json");
const accounts = require("~/database/accounts.json");

function Search() {
    const [searchResult, setSearchResult] = useState("");
    const [usersResult, setUsersResult] = useState(users);
    const [accountsResult, setAccountsResult] = useState(accounts);

    const handleChange = e => {
        setSearchResult(e.target.value);
    };

    return (
        <HeadlessTippy
            interactive
            render={attrs => {
                return (
                    <div
                        className={cx("search-result")}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h5 className={cx("search-title")}>User</h5>
                            {Object.entries(users).map(
                                ([username, data], index) => {
                                    return (
                                        <UserItem
                                            key={index}
                                            avatar={data.avatar}
                                            user={username}
                                            nickname={data.nickname}
                                        />
                                    );
                                }
                            )}
                            <h5 className={cx("search-title")}>Account</h5>
                            {accounts.map((account, index) => {
                                return (
                                    <AccountItem
                                        key={index}
                                        title={account.title}
                                        user={account.user}
                                        app={account.app}
                                    />
                                );
                            })}
                        </PopperWrapper>
                    </div>
                );
            }}
        >
            <div className={cx("search")}>
                <input
                    value={searchResult}
                    placeholder="Search for account"
                    onChange={handleChange}
                />
                {/* <button className={cx("clear")}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button> */}
                {/* <button className={cx("loading")}>
                <FontAwesomeIcon icon={faSpinner} />
            </button> */}
                <button className={cx("search-btn")}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
