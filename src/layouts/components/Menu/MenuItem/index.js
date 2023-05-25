import { getStyle } from "~/utils";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = getStyle(require("./MenuItem.module.scss").default);

function MenuItem({ icon, children, onClick, ...props }) {
    return (
        <div className={cx("wrapper")}>
            <Button
                onClick={onClick}
                beforeIcon={icon ? <FontAwesomeIcon icon={icon} /> : false}
            >
                {children}
            </Button>
        </div>
    );
}

export default MenuItem;
