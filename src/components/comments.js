import React from 'react';

const Comments = ({comments, loading}) => {

    if(loading){
        return <div>loading</div>;
    }

    return <ul className="list-group mb-4">
        { comments.map( comment => (
            <li key={comment.id} className="list-group-item">
                {comment.body}
            </li>
        ))}
    </ul>; 

};

export default Comments;
