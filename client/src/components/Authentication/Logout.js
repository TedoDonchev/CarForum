import { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        localStorage.clear();
        this.props.logout();
    }

    render() {
        return (
            <Redirect to='/' />
        )
    }


}

export default Logout;