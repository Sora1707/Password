import { getStyle } from "~/utils";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const { defaultAvatar } = require("~/constants.json").imageUrl;
const cx = getStyle(require("./CircleAvatar.module.scss").default);
const defaultFunc = () => {};

function CircleAvatar({
    url = defaultAvatar,
    size = 48,
    noOutline = false,
    onError = defaultFunc,
    onLoad = defaultFunc,
}) {
    const imgRef = useRef();

    const setDefaultAvatar = () => {
        imgRef.current.setAttribute("src", defaultAvatar);
    };

    return (
        <div
            className={cx("avatar", {
                "no-outline": noOutline,
            })}
            style={{
                width: size,
                height: size,
            }}
        >
            <img
                ref={imgRef}
                src={url}
                alt=""
                onError={() => {
                    setDefaultAvatar();
                    onError();
                }}
                onLoad={onLoad}
            />
        </div>
    );
}

CircleAvatar.propTypes = {
    url: PropTypes.string,
    size: PropTypes.number,
    noOutline: PropTypes.bool,
    onError: PropTypes.func,
    onLoad: PropTypes.func,
};

export default CircleAvatar;
