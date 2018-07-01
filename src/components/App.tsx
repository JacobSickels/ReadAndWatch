import * as React from "react";
import Dashboard from './Dashboard';

export class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <Dashboard />
            </div>
        );
    }
}

export default App;