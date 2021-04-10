import React from "react";
import "../../sass/tooltip.scss";
import classNames from "classnames";

export const POSITION = {
    RIGHT: "right",
    LEFT: "left",
    TOP: "top",
    BOTTOM: "bottom",
};

export const TYPE = {
    HOVER: "hover",
    FOCUS: "focus",
};

const Tooltip = (props) => {
    const { direction, type, children, content } = props;
    const classes = classNames("", {
        "tooltip-content-hover": type === TYPE.HOVER,
        "tooltip-content-focus": type === TYPE.FOCUS,

        "position-right": direction === POSITION.RIGHT,
        "position-left": direction === POSITION.LEFT,
        "position-top": direction === POSITION.TOP,
        "position-bottom": direction === POSITION.BOTTOM,
    });

    return (
        <div className="tooltip">
            {children}
            <div className={classes}>{content}</div>
        </div>
    );
};

export default Tooltip;
