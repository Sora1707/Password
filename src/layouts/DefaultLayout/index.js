import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AccountBox from "~/components/AccountBox";

import { getStyle } from "~/utils";

const cx = getStyle(require("./DefaultLayout.module.scss").default);

function DefaultLayout() {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <Sidebar />
                <div className={cx("content")}>
                    <AccountBox />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
