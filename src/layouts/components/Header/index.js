// MODULES
import {
    faEarth,
    faLock,
    faMoon,
    faPlus,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";

// LOCAL MODULES/FILE
import { getStyle } from "~/utils";
import { routes } from "~/config";
import Search from "../Search";
import CircleAvatar from "~/components/CircleAvatar";
import Button from "~/components/Button";
import { PopperWrapper } from "~/components/Popper";
import Menu from "../Menu";
import { userSearch } from "~/services/search";

// VARIABLES
const { logo, defaultAvatar } = require("~/constants.json").imageUrl;
const cx = getStyle(require("./Header.module.scss").default);

const currentUser = "sora";

const MENU_OPTIONS = [
    {
        title: "English",
        icon: faEarth,
        children: {
            title: "Language",
            data: [
                { title: "Tiếng Việt" },
                { title: "English" },
                { title: "日本語" },
                { title: "Español" },
            ],
        },
    },
    {
        title: "Users",
        icon: faLock,
        children: {
            title: "Users",
            data: userSearch(""),
        },
    },
];

const userOptions = [
    {
        title: "Profile",
        icon: faUser,
        to: `/user/${currentUser}`,
    },
    ...MENU_OPTIONS,
];

function Header() {
    const location = useLocation();
    const to =
        location.pathname === routes.addAccount
            ? routes.addUser
            : routes.addAccount;
    const addText =
        location.pathname === routes.addAccount ? "User" : "Account";

    return (
        <div className={cx("wrapper")}>
            <Link to={routes.home} className={cx("logo-link")}>
                <img className={cx("logo")} alt="Logo" src={logo} />
            </Link>

            <Search />

            <div className={cx("actions")}>
                <Button
                    to={to}
                    plain
                    beforeIcon={<FontAwesomeIcon icon={faPlus} />}
                >
                    New {addText}
                </Button>

                <button className={cx("dark-mode")}>
                    <FontAwesomeIcon icon={faMoon} />
                </button>

                <Menu options={currentUser ? userOptions : MENU_OPTIONS}>
                    <CircleAvatar url={defaultAvatar} size={42} />
                </Menu>
            </div>
        </div>
    );
}

export default Header;
