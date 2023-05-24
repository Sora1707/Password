import { getStyle } from "~/utils";

const cx = getStyle(require("./Sidebar.module.scss").default);

function Sidebar() {
    return <div className={cx("wrapper")}>Sidebar</div>;
}

export default Sidebar;
