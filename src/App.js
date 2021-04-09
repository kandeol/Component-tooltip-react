import "./App.scss";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
    return (
        <div className="App">
            I love&nbsp;<Tooltip content="test">tooltip</Tooltip>&nbsp;!
        </div>
    );
}

export default App;
