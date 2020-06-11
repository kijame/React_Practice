import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>WARNING!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author= "Sam" 
          timeAgo="Today at 4:44PM" 
          avatar={Faker.image.avatar()} 
          text="first"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author= "Dave" 
          timeAgo="Today at 2:44PM" 
          avatar={Faker.image.avatar()} 
          text="second" 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author= "Jane" 
          timeAgo="Yesterday at 1:44AM" 
          avatar={Faker.image.avatar()} 
          text="third" 
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
