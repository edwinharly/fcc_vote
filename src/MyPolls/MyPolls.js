import React, { Component } from 'react';
import PollsList from '../Shared/PollsList.js';

const mypolls = [
    {title:'Poll1',url:''},
    {title:'Poll2',url:''},
    {title:'Poll3',url:''}
];

class MyPolls extends Component {
    render() {
        return (
            <div style={{marginTop: 75}} className="container">
                <h1>My Polls</h1>
                <PollsList polls={mypolls} />
            </div>
        );
    }
}
export default MyPolls;