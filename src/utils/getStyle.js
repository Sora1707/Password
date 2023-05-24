import classNames from "classnames/bind";

export default function getStyle(styles) {
    const cx = classNames.bind(styles);
    return cx;
}
