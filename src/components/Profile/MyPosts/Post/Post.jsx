import classes from './Post.module.css';

const Post = (props) => {
    return <div className={classes.item}>
              <img src="https://cdn.mos.cms.futurecdn.net/BX7vjSt8KMtcBHyisvcSPK-1200-80.jpg" alt="avatar" />
              {props.message}
              <div><span>like</span></div> {props.likesCount}
              </div>
}

export default Post;
