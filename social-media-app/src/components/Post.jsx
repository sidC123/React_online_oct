import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { PostContext } from "../store/social-media-store";
import { useContext } from "react";

const Post = ({ post }) => {
    const { deletePost } = useContext(PostContext);

    return (
        <div className="col h-100">
            <div className="card shadow-sm position-relative h-100">
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                    <div className="d-flex align-items-center gap-2 mt-1 mb-2">
                        {post.tags && post.tags.map((tag, index) => (
                            <span key={index} className="badge text-bg-primary text-white shadow text-capitalize">#{tag}</span>
                        ))}
                    </div>
                    <p>
                        {post.reactions > 0 ? <FaHeart /> : <FaRegHeart />}
                        {post.reactions > 0 ? <span className="ms-1">Liked By {post.reactions}</span> :
                            <span className="opacity-50 ms-1">
                                Be the first to like this
                            </span>
                        }
                    </p>
                    <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                        onClick={() => { deletePost(post.id) }}
                    >
                        <ImCross />
                    </span>
                </div>
            </div>
        </div >
    )
}

export default Post