import "./App.scss";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
    return (
        <div className="App">
            Hover&nbsp;
            <strong>
                <Tooltip
                    tooltipPosition="top"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                >
                    HERE
                </Tooltip>
            </strong>
            &nbsp;!
        </div>
    );
}

export default App;
