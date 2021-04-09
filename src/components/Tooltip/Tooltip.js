import React from "react";
import "../../sass/tooltip.scss";
import classNames from "classnames";

export const POSITION = {
    RIGHT: "right",
    LEFT: "left",
    TOP: "top",
    BOTTOM: "bottom",
};

const Tooltip = (props) => {
    const { tooltipPosition, children, content } = props;
    const classes = classNames("tooltip-content", {
        "position-right": tooltipPosition === POSITION.RIGHT,
        "position-left": tooltipPosition === POSITION.LEFT,
        "position-top": tooltipPosition === POSITION.TOP,
        "position-bottom": tooltipPosition === POSITION.BOTTOM,
    });

    return (
        <div className="tooltip">
            <div>{children}</div>
            <div className={classes}>{content}</div>
        </div>
    );
};

export default Tooltip;
