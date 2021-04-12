import React, { useState } from "react";
import "../../sass/cat.scss";
import ImgChat from "../../img/blast.png";

const Cat = () => {
    const [toggleChat, setToggleChat] = useState(false);
    return (
        <div className="cat-content">
            <div className={`cat-img ${toggleChat ? `active` : ``}`}>
                <img width="300px" src={ImgChat} alt="chat" />
                <div>
                    <span>elle s'appelle Blast !</span>
                </div>
            </div>
            <div
                className="cat-button"
                onClick={() => setToggleChat(!toggleChat)}
            >
                Click !
            </div>
        </div>
    );
};

export default Cat;
