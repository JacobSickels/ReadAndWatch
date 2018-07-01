import * as React from "react";
import Dashboard from './Dashboard';

class App extends React.Component {


    render() {
        return (
            <div className="app">
                <h1> App </h1>
                <Dashboard />
            </div>
        );
    }
}

export default App;