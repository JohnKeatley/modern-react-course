import React from 'react';

const CommentDetail = ({author, avatar, post, timeAgo}) => {
return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={avatar}/>
                </a>
                <div className="content">
                    <a>
                        {author}
                    </a>
                    <div className="metadata">
                        <span className="date">{timeAgo}</span>
                    </div>
                    <div className="text">{post}</div>
                </div>
            </div>
    )
}

export default CommentDetail;