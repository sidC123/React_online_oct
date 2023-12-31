import { useRef } from "react";
import { PostContext } from "../store/social-media-store";
import { useContext } from "react";

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

        addPost(userId, postTitle, postContent, postReactions, postTags);

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