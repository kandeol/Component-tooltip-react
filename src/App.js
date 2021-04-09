import "./App.scss";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
    return (
        <div className="App">
            <div className="App-content">
                <span>
                    Hover&nbsp;
                    <strong>
                        <Tooltip
                            tooltipPosition="top"
                            type="hover"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        >
                            HERE
                        </Tooltip>
                    </strong>
                    &nbsp;!
                </span>

                <form>
                    <span>Example with input :&nbsp;</span>
                    <Tooltip
                        tooltipPosition="top"
                        type="focus"
                        content="Lorem ipsum dolor sit amet"
                    >
                        <input type="text" placeholder="text input" />
                    </Tooltip>
                </form>
            </div>
        </div>
    );
}

export default App;
