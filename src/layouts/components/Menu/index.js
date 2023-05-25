import Tippy from "@tippyjs/react/headless";
import { useState } from "react";

import { PopperWrapper } from "~/components/Popper";
import { getStyle } from "~/utils";
import MenuItem from "./MenuItem";
import UserItem from "~/components/UserItem";
import Header from "./Header";

const cx = getStyle(require("./Menu.module.scss").default);

function Menu({ children, options }) {
    const [history, setHistory] = useState([{ title: "Menu", data: options }]);

    const current = history[history.length - 1];

    return (
        <Tippy
            interactive
            placement="bottom-start"
            render={attrs => {
                return (
                    <div className={cx("menu")} {...attrs}>
                        <PopperWrapper>
                            {history.length === 1 ? (
                                false
                            ) : (
                                <Header
                                    title={current.title}
                                    onBack={() => {
                                        setHistory(prevState => {
                                            prevState.pop();
                                            return [...prevState];
                                        });
                                    }}
                                />
                            )}
                            {current.data.map((option, index) => {
                                const isParent =
                                    option.hasOwnProperty("children");
                                const onClick = !isParent
                                    ? () => {}
                                    : () => {
                                          setHistory(prevState => [
                                              ...prevState,
                                              {
                                                  title: option.children.title,
                                                  data: option.children.data,
                                              },
                                          ]);
                                      };

                                const renderItem =
                                    current.title === "Users" ? (
                                        <UserItem
                                            key={index}
                                            avatar={option[1].avatar}
                                            nickname={option[1].nickname}
                                            user={option[0]}
                                        />
                                    ) : (
                                        <MenuItem
                                            key={index}
                                            icon={option.icon}
                                            onClick={onClick}
                                            to={option.to}
                                            href={option.href}
                                        >
                                            {option.title}
                                        </MenuItem>
                                    );

                                return renderItem;
                            })}
                        </PopperWrapper>
                    </div>
                );
            }}
        >
            <div>{children}</div>
        </Tippy>
    );
}

export default Menu;
