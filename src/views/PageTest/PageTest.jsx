import React from "react";
import Tooltip from "../../components/Tooltip/Tooltip";
import "../../sass/page_test.scss";
import Cat from "../../components/Cat/Cat";

const PageTest = (params) => {
    return (
        <div className="page-test">
            <div className="section-hover">
                <h3>Tooltip use with event Hover</h3>
                <span>Example with text :&nbsp;</span>
                <span>
                    Hover&nbsp;
                    <Tooltip
                        direction="top"
                        type="hover"
                        content="Lorem ipsum dolor sit amet"
                    >
                        <strong>HERE</strong>
                    </Tooltip>
                    &nbsp;!
                </span>
            </div>
            <div className="section-focus">
                <h3>Tooltip use with event Focus</h3>
                <span>Example with input :&nbsp;</span>
                <Tooltip
                    direction="top"
                    type="focus"
                    content="Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
                >
                    <input type="text" placeholder="text input" />
                </Tooltip>
            </div>
            <div className="section-component">
                <h3>Tooltip use with a content component</h3>
                <span>
                    Hover&nbsp;
                    {/* tooltip receive a component */}
                    <Tooltip direction="top" type="hover" content={<Cat />}>
                        <strong>HERE</strong>
                    </Tooltip>
                    &nbsp;!
                </span>
            </div>
        </div>
    );
};

export default PageTest;
