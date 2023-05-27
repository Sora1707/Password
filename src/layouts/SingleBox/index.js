import { useLocation } from "react-router-dom";

import { getStyle } from "~/utils";
import { routes } from "~/config";
import Header from "../components/Header";
import NewUserBox from "../components/NewUserBox";
import NewAccountBox from "../components/NewAccountBox";

const cx = getStyle(require("./SingleBox.module.scss").default);

function SingleBox() {
    const location = useLocation();

    const Component =
        location.pathname === routes.addUser ? NewUserBox : NewAccountBox;

    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <Component />
            </div>
        </div>
    );
}

export default SingleBox;
