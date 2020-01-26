import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor() {
        super();
        this.state = {
            hasError : false
        }
    }

    componentDidCatch() {
        this.setState({hasError : true});
    }

    render() {
        if(this.state.hasError) {
            return (
                <h1 className = 'f1 tc'> Oooopssss !  Something went wrong.</h1>
            );
        } else {
            return(
                <div>
                    {this.props.children}
                </div>
            );
        }
    }
}

export default ErrorBoundry;