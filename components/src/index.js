import React from 'react';
import ReactDOM from 'react-dom'
import CommentDetail from "./CommentDetail";
import faker from 'faker';
import ApprovalCard from './ApprovalCard'


const App = () => {
    return (
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail author="Sam" timeAgo="Today at 3:51AM" content="Great job" avatar={faker.image.food()}/>
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail author="Alex" timeAgo="Today at 5:57PM" content="Way to go" avatar={faker.image.food()}/>
        </ApprovalCard>
        
        <ApprovalCard>
            <CommentDetail author="Jane" timeAgo="Today at 2:00PM" content="Awesome" avatar={faker.image.food()}/>
        </ApprovalCard>
        
    </div>
    );
}

export default App;

ReactDOM.render(<App />, document.querySelector('#root'));

