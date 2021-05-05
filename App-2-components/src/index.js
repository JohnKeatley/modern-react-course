import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
    <div className="ui container comments">
        <ApprovalCard>
            <h4>Warning!</h4>
            <div>Are you sure you want to do this?</div>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author={faker.name.findName()} timeAgo="Today at 4:45pm" avatar={faker.image.avatar()} post="Nice blog post"/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author={faker.name.findName()} timeAgo="Today at 2:00am" avatar={faker.image.avatar()} post="Really informative"/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author={faker.name.findName()} timeAgo="Yesterday at 5:50pm" avatar={faker.image.avatar()} post="This helped a lot"/>
        </ApprovalCard>
    </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))