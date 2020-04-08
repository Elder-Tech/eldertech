import React, {Component} from 'react';
import HeaderComponent from "./HeaderComponent";

class BaseListComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let header = <div/>;
        if (!this.props.removeHeader) {
            header = <HeaderComponent />
        }
        return (
            <div className="App">
                {header}
                <div className="list-page">
                    {this.props.extra}
                    <h2>{this.props.title}</h2>
                    {this.props.list}
                </div>
            </div>
        );
    }
}

export default BaseListComponent;