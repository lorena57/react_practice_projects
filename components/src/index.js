import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          time="Today at 2:23pm"
          message="Wow, great job"
          avatar={faker.image.cats()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          time="Today at 4:49pm"
          message="Wow you are still studying?"
          avatar={faker.image.cats()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="James"
          time="Today at 1:01am"
          message="When do you take a breather?"
          avatar={faker.image.cats()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
