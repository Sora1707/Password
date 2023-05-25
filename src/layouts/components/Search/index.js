// MODULES
import {
    faCircleXmark,
    faSearch,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useRef } from "react";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";

// LOCAL MODULES/FILE
import { getStyle } from "~/utils";
import { userSearch, accountSearch } from "~/services/search";
import { PopperWrapper } from "~/components/Popper";
import CircleAvatar from "~/components/CircleAvatar";
import UserItem from "~/components/UserItem";
import AccountItem from "~/components/AccountItem";

import { useDebounce } from "~/hooks";

// VARIABLES
const cx = getStyle(require("./Search.module.scss").default);

const SEARCH_DELAY = 1000;
const USER = "soravn";

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState({
        users: [],
        accounts: [],
    });
    const [showResult, setShowResult] = useState(false);

    const searchDebounceValue = useDebounce(searchValue, SEARCH_DELAY);

    const inputRef = useRef();

    useEffect(() => {
        const newUsers = userSearch(searchDebounceValue);
        const newAccounts = accountSearch(searchDebounceValue);
        setSearchResult({
            users: newUsers,
            accounts: newAccounts,
        });
    }, [searchDebounceValue]);

    const usersResult = searchResult.users;
    const accountsResult = searchResult.accounts;

    // HANDLERS
    const handleChange = e => {
        setSearchValue(e.target.value);
    };

    const handleClickOutside = () => {
        setShowResult(false);
    };

    const handleClearSearch = () => {
        setSearchValue("");
        setSearchResult({ users: [], accounts: [] });
        inputRef.current.focus();
    };

    return (
        <HeadlessTippy
            interactive
            visible={
                showResult &&
                (usersResult.length !== 0 || accountsResult.length !== 0)
            }
            onClickOutside={handleClickOutside}
            render={attrs => {
                return (
                    <div
                        className={cx("search-result")}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            {usersResult.length === 0 ? (
                                false
                            ) : (
                                <h5 className={cx("search-title")}>User</h5>
                            )}
                            {usersResult.map(([username, data], index) => {
                                return (
                                    <UserItem
                                        key={index}
                                        avatar={data.avatar}
                                        user={username}
                                        nickname={data.nickname}
                                    />
                                );
                            })}
                            {accountsResult.length === 0 ? (
                                false
                            ) : (
                                <h5 className={cx("search-title")}>Account</h5>
                            )}
                            {accountsResult.map(account => {
                                return (
                                    <AccountItem
                                        key={account.id}
                                        title={account.title}
                                        user={account.user}
                                        app={account.app}
                                        id={account.id}
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
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search for something..."
                    onChange={handleChange}
                    onFocus={() => setShowResult(true)}
                />
                {searchValue === "" ? (
                    false
                ) : (
                    <button className={cx("clear")} onClick={handleClearSearch}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
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
