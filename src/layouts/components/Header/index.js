// MODULES
import {
    faEarth,
    faLock,
    faMoon,
    faPlus,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";

// LOCAL MODULES/FILE
import { getStyle } from "~/utils";
import { routes } from "~/config";
import Search from "../Search";
import CircleAvatar from "~/components/CircleAvatar";
import Button from "~/components/Button";
import { PopperWrapper } from "~/components/Popper";
import Menu from "../Menu";

// VARIABLES
const { logo, defaultAvatar } = require("~/constants.json").imageUrl;
const users = require("~/database/users.json");
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
            data: users,
        },
    },
];

const userOptions = [
    {
        title: "Profile",
        icon: faUser,
    },
    ...MENU_OPTIONS,
];

function Header() {
    return (
        <div className={cx("wrapper")}>
            <Link to={routes.home} className={cx("logo-link")}>
                <img className={cx("logo")} alt="Logo" src={logo} />
            </Link>

            <Search />

            <div className={cx("actions")}>
                <Link to={routes.add}>
                    <Button
                        plain
                        beforeIcon={<FontAwesomeIcon icon={faPlus} />}
                    >
                        Add
                    </Button>
                </Link>
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
