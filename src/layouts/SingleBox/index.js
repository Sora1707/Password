import { getStyle } from "~/utils";
import Header from "../components/Header";
import NewUserBox from "../components/NewUserBox";

const cx = getStyle(require("./SingleBox.module.scss").default);

function SingleBox() {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <NewUserBox />
            </div>
        </div>
    );
}

export default SingleBox;
