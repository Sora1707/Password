import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import { getStyle } from "~/utils";

const cx = getStyle(require("./Header.module.scss").default);
const defaultFunction = () => {};

function Header({ title, onBack = defaultFunction }) {
    return (
        <div className={cx("wrapper")}>
            <button className={cx("back-btn")} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx("title")}>{title}</h4>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
