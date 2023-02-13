import {useSelector} from "react-redux"
import { selectAllPosts } from "./postsSlice";

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const postsData = posts.map(post => (
        <article className="postwrap" key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.id}</p>
            <p>{post.content}</p>
        </article>
    ))

  return (
    <div>

        {postsData}
    </div>
  )
}

export default PostsList