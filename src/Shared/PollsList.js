import React, { Component } from 'react';

class PollsList extends Component {
    render() {
        return (
            <div className="list-group">
                {this.props.polls.map(p => (
                    <div className="row">
                        <div className="col-md-12">
                            <a href="#" className="list-group-item">
                                {p.title}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default PollsList;