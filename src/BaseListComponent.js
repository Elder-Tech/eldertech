import React, {Component} from 'react';

class BaseListComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
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