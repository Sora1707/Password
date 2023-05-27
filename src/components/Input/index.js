import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { getStyle } from "~/utils";

const cx = getStyle(require("./Input.module.scss").default);
const defaultFunc = () => {};

function Input({
    copy,
    onFocus = defaultFunc,
    onBlur = defaultFunc,
    ...props
}) {
    const copyToClipboard = element => {
        const input = element.querySelector("input");

        // Select the text field
        input.select();
        input.setSelectionRange(0, 99999); // For mobile devices
        // Copy the text inside the text field
        navigator.clipboard.writeText(input.value);
    };

    const inputRef = useRef();

    return (
        <div ref={inputRef} className={cx("input")}>
            <input
                onFocus={() => {
                    inputRef.current.classList.add(cx("active"));
                    onFocus();
                }}
                onBlur={() => {
                    inputRef.current.classList.remove(cx("active"));
                    onBlur();
                }}
                {...props}
            />
            {!copy ? (
                false
            ) : (
                <div
                    className={cx("icon")}
                    onClick={e => copyToClipboard(inputRef.current)}
                >
                    <FontAwesomeIcon icon={faCopy} />
                </div>
            )}
        </div>
    );
}

export default Input;
