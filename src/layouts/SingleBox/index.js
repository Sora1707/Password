import { getStyle } from "~/utils";
import Header from "../components/Header";

const cx = getStyle(require("./SingleBox.module.scss").default);

function SingleBox() {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>Single Box</div>
        </div>
    );
}

export default SingleBox;
