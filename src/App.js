import "./App.scss";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
    return (
        <div className="App">
            <div className="App-content">
                <span>
                    Hover&nbsp;
                    <Tooltip
                        direction="top"
                        type="hover"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    >
                        <strong>HERE</strong>
                    </Tooltip>
                    &nbsp;!
                </span>

                <form>
                    <span>Example with input :&nbsp;</span>
                    <Tooltip
                        direction="top"
                        type="focus"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, onsectetur adipiscing elit,"
                    >
                        <input type="text" placeholder="text input" />
                    </Tooltip>
                </form>
            </div>
        </div>
    );
}

export default App;
