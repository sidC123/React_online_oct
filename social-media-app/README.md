CreatePost.jsx  => createPost function

PostList.jsx => posts array

Post.jsx => object with data from posts array, deletPost function

Issue Arises: PROP DRILLING
Solution: 
1. Redux - Global state management
2. Context Api- Local state management

<!-- STORE CONTEXT -->
import { postListDemoData } from "../demoData";
import { createContext, useReducer } from "react";

const initialState = {
    postList: [],
    addPost: () => { },
    deletePost: () => { }
}

export const PostContext = createContext(initialState)

const postListReducer = (currentPostList, action) => {
    let newPosts = currentPostList;
    if (action.type === 'DELETE_POST') {
        newPosts = currentPostList.filter(post => post.id !== action.payload.postId);
        return newPosts;
    }
    else if (action.type === 'ADD_POST') {
        newPosts = [action.payload, ...currentPostList]
        return newPosts;
    }
}

const PostContextProvider = ({ children }) => {

    const [postList, dispatchPostActions] = useReducer(postListReducer, postListDemoData);

    const addPost = (userId, postTitle, postContent, postTags, postReactions) => {
        dispatchPostActions({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                userId: userId,
                title: postTitle,
                body: postContent,
                tags: postTags,
                reactions: postReactions
            }
        })
    };

    const deletePost = (postId) => {
        dispatchPostActions({
            type: 'DELETE_POST',
            payload: { postId }
        })
    };

    return (
        <PostContext.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider


<!-- --------------------------------------------------------------------------------------------------- -->


<!-- CREATE POST -->
import { useContext, useRef } from "react"
import { PostContext } from "../store/social-media-store";

const CreatePost = () => {

    const { addPost } = useContext(PostContext);

    const userIdEle = useRef();
    const postTitleEle = useRef();
    const postContentEle = useRef();
    const postReactionsEle = useRef();
    const postTagsEle = useRef();

    const handleCreatePost = (e) => {
        e.preventDefault();
        const userId = userIdEle.current.value;
        const postTitle = postTitleEle.current.value;
        const postContent = postContentEle.current.value;
        const postReactions = postReactionsEle.current.value;
        const postTags = postTagsEle.current.value.split(" ");

        if (userId && postTitle && postTags && postReactions && postContent) {
            addPost(userId, postTitle, postContent, postTags, postReactions);
        }
        else {
            alert("Please enter post data");
        }

        userIdEle.current.value = ""
        postTitleEle.current.value = ""
        postContentEle.current.value = ""
        postReactionsEle.current.value = ""
        postTagsEle.current.value = ""

    }

    return (
        <form className="create-post-form mx-4 my-4 border shadow p-5 rounded" onSubmit={handleCreatePost}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">User Id</label>
                <input type="text" className="form-control" id="userId" ref={userIdEle} />
            </div>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" className="form-control" id="title" placeholder="Whats on your mind?" ref={postTitleEle} />
            </div>

            <div className="mb-3">
                <label htmlFor="content" className="form-label">Post Content</label>
                <textarea rows={3} type="text" className="form-control" id="content" placeholder="Tell us something more about it" ref={postContentEle} />
            </div>

            <div className="mb-3">
                <label htmlFor="numberOfPeopleReacted" className="form-label">Number Of People Reacted</label>
                <input type="text" className="form-control" id="numberOfPeopleReacted" placeholder="Number of people" ref={postReactionsEle} />
            </div>

            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Tags</label>
                <input type="text" className="form-control" id="tags" placeholder="Add relevant tags with space in between" ref={postTagsEle} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default CreatePost


<!-- --------------------------------------------------------------------------------------------------- -->


<!-- APP JS -->
<PostContextProvider>
    <div className='d-flex position-relative'>
    <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
    <div className='w-100 position-relative'>
        <Header />
        <main className='mx-4 py-4'>
        {activeTab === "home" ? <PostList /> : <CreatePost />}
        </main>
        <Footer />
    </div>
    </div>
</PostContextProvider>


<!-- --------------------------------------------------------------------------------------------------- -->


<!-- POST LIST -->
import { useContext } from "react"
import { PostContext } from "../store/social-media-store"
import Post from "./Post"

const PostList = () => {
    const { postList } = useContext(PostContext);
    return (
        <div className="d-flex flex-column gap-3">
            {postList.length === 0 && <h1>There are no posts yet</h1>}

            {
                postList && postList.map((post) => (
                    <Post key={post.id} post={post} />
                ))
            }
        </div>
    )
}

export default PostList


<!-- --------------------------------------------------------------------------------------------------- -->


 <!-- POST -->
 import { useContext } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { PostContext } from "../store/social-media-store";

const Post = ({ post }) => {
    const { deletePost } = useContext(PostContext)
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
                        onClick={() => deletePost(post.id)}
                    >
                        <ImCross />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Post