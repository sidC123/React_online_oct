import { createContext, useReducer } from "react";
import { postListDemoData } from "../demoData";

const initialState = {
    postList: [],
    addPost: () => { },
    deletePost: () => { },
}

export const PostContext = createContext(initialState)

const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;

    if (action.type === "ADD_POST") {
        newPostList = [action.payload, ...currentPostList]
        console.log(newPostList, "this is from postReducer");
        return newPostList;
    } else if (action.type === "DELETE_POST") {
        newPostList = currentPostList.filter(post => post.id !== action.payload);
        return newPostList;
    }
}

const PostContextProvider = ({ children }) => {
    const [postList, dispatchPostActions] = useReducer(postListReducer, postListDemoData);

    const addPost = (userId, postTitle, postContent, postReactions, postTags) => {
        dispatchPostActions({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                userId: userId,
                title: postTitle,
                body: postContent,
                tags: postTags,
                reactions: postReactions
            }
        })
    }

    const deletePost = (postId) => {
        dispatchPostActions({
            type: "DELETE_POST",
            payload: postId
        })
    }

    return (
        <PostContext.Provider value={{ postList, addPost, deletePost }} >
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider;









// import { postListDemoData } from "../demoData";
// import { createContext, useReducer } from "react";

// const initialState = {
//     postList: [],
//     addPost: () => { },
//     deletePost: () => { }
// }

// export const PostContext = createContext(initialState)

// const postListReducer = (currentPostList, action) => {
//     let newPosts = currentPostList;

//     if (action.type === 'DELETE_POST') {
//         newPosts = currentPostList.filter(post => post.id !== action.payload.postId);
//         return newPosts;
//     }
//     else if (action.type === 'ADD_POST') {
//         newPosts = [action.payload, ...currentPostList]
//         return newPosts;
//     }
// }

// const PostContextProvider = ({ children }) => {

//     const [postList, dispatchPostActions] = useReducer(postListReducer, postListDemoData);

//     const addPost = (userId, postTitle, postContent, postTags, postReactions) => {
//         dispatchPostActions({
//             type: 'ADD_POST',
//             payload: {
//                 id: Date.now(),
//                 userId: userId,
//                 title: postTitle,
//                 body: postContent,
//                 tags: postTags,
//                 reactions: postReactions
//             }
//         })
//     };

//     const deletePost = (postId) => {
//         dispatchPostActions({
//             type: 'DELETE_POST',
//             payload: { postId }
//         })
//     };

//     return (
//         <PostContext.Provider value={{ postList, addPost, deletePost }}>
//             {children}
//         </PostContext.Provider>
//     )
// }

// export default PostContextProvider




