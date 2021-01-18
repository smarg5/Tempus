import React from 'react';
import poststyles from '../styles/post.module.scss';

const Post = (props) => (
  <div className={`${poststyles.panel} ${poststyles.paneldefault} ${poststyles.postbody}`}>
    <div className="panel-body">
      {
        props.postBody.map((postPart, idx) => (
          <div key={idx}>{postPart}</div>
        ))
      }
    </div>
  </div>
);

export default Post;