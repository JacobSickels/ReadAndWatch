import * as React from 'react';

class Dashboard extends React.Component {

    jsxMethod = () => {
        console.log('Lets go');
    }

    render() {
        return (
            <h3>
                Dashboard and 2nd inner component
                {
                    this.jsxMethod()
                }
            </h3>
        );
    }
}

export default Dashboard;