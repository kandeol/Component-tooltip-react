import React from "react";
import "../../sass/tooltip.scss";

const Tooltip = (props) => {
    return (
        <div className="tooltip">
            <strong>{props.children}</strong>
            <div className="tooltip-content">{props.content}</div>
        </div>
    );
};

export default Tooltip;
