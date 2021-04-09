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
    const { tooltipPosition, type, children, content } = props;
    const classes = classNames("", {
        "tooltip-content-hover": type === TYPE.HOVER,
        "tooltip-content-focus": type === TYPE.FOCUS,

        "position-right": tooltipPosition === POSITION.RIGHT,
        "position-left": tooltipPosition === POSITION.LEFT,
        "position-top": tooltipPosition === POSITION.TOP,
        "position-bottom": tooltipPosition === POSITION.BOTTOM,
    });

    return (
        <div className="tooltip">
            {children}
            <div className={classes}>{content}</div>
        </div>
    );
};

export default Tooltip;
