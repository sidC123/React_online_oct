import Post from "./Post";
import { PostContext } from "../store/social-media-store";
import { useContext } from "react";

const PostList = () => {
    const { postList } = useContext(PostContext);

    return (
        <div className="d-flex flex-column gap-3">
            {
                postList && postList.map((post) => (
                    <Post key={post.id} post={post} />
                ))
            }
        </div>
    )
}

export default PostList