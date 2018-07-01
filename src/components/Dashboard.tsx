import * as React from "react";

class Dashboard extends React.Component {

    jsxMethod = () => {
        console.log('Lets go');
    }

    render() {
        return (
            <div className="dashboard">
                <h3>
                    Dashboard Hello
                    {
                        this.jsxMethod()
                    }
                </h3>
            </div>
        );
    }
}

export default Dashboard;