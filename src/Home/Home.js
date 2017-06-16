import React, { Component } from 'react';
import PollsList from '../Shared/PollsList.js';

const polls = [
    {title:'Poll1',url:''},
    {title:'Poll2',url:''},
    {title:'Poll3',url:''}
];

// const PollsList = ({polls}) => (
//     <div>
//         {polls.map(p => (
//             <div className="row">
//                 <div className="col-md-12">
//                     {p.title}
//                 </div>
//             </div>
//         ))}
//     </div>
// );

class Home extends Component {
    render() {
        return (
            <div style={{marginTop: 75}} className="container">
                <h1>Voty Vote</h1>
                <h3>As a guest, you only can vote and see the results</h3>
                <h3>Or you can sign-in and host your own poll</h3>
                <PollsList polls={polls} />
            </div>
        );
    }
}
export default Home;