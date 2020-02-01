import { database } from "../data/Config";

//Adding posts from database to posts.js
export function startAddingPost(post) {
  return dispatch => {
    return database
      .ref("posts")
      .update({ [post.id]: post })
      .then(() => {
        dispatch(addPost(post));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
//loading post from database
export function startLoadingPost() {
  return dispatch => {
    return database
      .ref("posts")
      .once("value")
      .then(snapshot => {
        let posts = [];
        snapshot.forEach(childSnapshot => {
          posts.push(childSnapshot.val());
        });
        dispatch(loadPosts(posts));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
//remove post from database
export function startRemovingPost(index, id) {
  return dispatch => {
    return database
      .ref(`posts/${id}`)
      .remove()
      .then(() => {
        dispatch(removePhoto(index));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
//adding comments to database
export function startAddingComment(comment, postId) {
  return dispatch => {
    return database
      .ref("comments/" + postId)
      .push(comment)
      .then(() => {
        dispatch(addComment(comment, postId));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
//loading comments from database
export function startLoadingComments() {
  return dispatch => {
    return database
      .ref("comments")
      .once("value")
      .then(snapshot => {
        let comments = {};
        snapshot.forEach(childSnapshot => {
          comments[childSnapshot.key] = Object.values(childSnapshot.val());
        });
        dispatch(loadComments(comments));
      });
  };
}

//remove post from UI
export function removePhoto(index) {
  return {
    type: "REMOVE_POST",
    index: index
  };
}
//add Post to UI
export function addPost(post) {
  return {
    type: "ADD_POST",
    post: post
  };
}
//add comments to UI
export function addComment(comment, postId) {
  return {
    type: "ADD_COMMENT",
    comment,
    postId
  };
}
//load post from database
export function loadPosts(posts) {
  return {
    type: "LOAD_POST",
    posts: posts
  };
}
//load comment from database
export function loadComments(comments) {
  return {
    type: "LOAD_COMMENTS",
    comments: comments
  };
}
