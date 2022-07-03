import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state';

const MyPosts = (props) => {
let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> );   

let newPostElement = React.createRef();
let addPost = () => {
  let text = newPostElement.current.value;
  props.dispatch(addPostActionCreator());
}

let onPostChange = () => {
  let text = newPostElement.current.value;
  props.dispatch(updateNewPostTextActionCreator(text));
}

return ( 
  <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
          <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
          </div>
          <div className={s.button}>
            <button onClick= { addPost } >add post</button>
          </div>
      </div>
        <div className={s.posts}>
            { postsElements }
        </div>
  </div>
 )
}

export default MyPosts;
