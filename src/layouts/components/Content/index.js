import { useLocation } from "react-router-dom";

import AccountBox from "~/components/AccountBox";
import Button from "~/components/Button";
import { getStyle } from "~/utils";
import accounts from "~/database/accounts.json";
import { routes } from "~/config";
import { accountSearch } from "~/services/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Divider from "~/components/Divider";

const cx = getStyle(require("./Content.module.scss").default);

function Content() {
    const location = useLocation();
    let accounts = [];

    if (location.pathname === routes.filter) accounts = accountSearch("");
    else {
        const user = location.pathname.split("/").at(-1);
        accounts = user === "all" ? accountSearch("") : accountSearch(user);
    }

    return (
        <div className={cx("wrapper")}>
            {accounts.length ? false : <h3>There is no accounts</h3>}
            {accounts.map(account => {
                return <AccountBox key={account.id} account={account} />;
            })}
            <Divider size={20} />
            <Button
                primary
                beforeIcon={<FontAwesomeIcon icon={faPlus} />}
                to={routes.add}
            >
                Add
            </Button>
            <Divider size={20} />
        </div>
    );
}

export default Content;
