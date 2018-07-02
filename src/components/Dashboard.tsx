import * as React from "react";
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {

    render() {
        return (
            <div className="dashboard">
                <h3>
                    Dashboard Hello aylmao
                    <br/>
                    <Link to="/462774557720444940">Test </Link>
                    <br/>
                    <Link to="/463168070668648468">Test 2 </Link>
                </h3>
            </div>
        );
    }
}

export default Dashboard;