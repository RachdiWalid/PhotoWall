import { database } from "../data/Config";

//START ADDING Register

export const Login = userLogin => {
  return dispatch => {
    return database
      .ref()
      .child("users")
      .on("value", snapshot => {
        snapshot.forEach(el => {
          if (
            el.val().username === userLogin.username &&
            el.val().password === userLogin.password
          ) {
            localStorage.setItem("key", el.key);
            localStorage.setItem("username", el.val().username);
            dispatch(checkUser(userLogin));
          } else {
            console.log("error");
          }
        });
      });
  };
};

//START ADDING Register
export const addUser = user => {
  return dispatch => {
    return database
      .ref()

      .child("users")
      .push({ ...user, posts: null, comments: null })
      .then(() => {
        dispatch(handelRegister(user));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
//Adding posts from database to posts.js
export function startAddingPost(post) {
  const id = localStorage.getItem("key");
  return dispatch => {
    return database
      .ref()
      .child("users")
      .child(id)
      .child("posts")
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
    const id = localStorage.getItem("key");
    return database
      .ref("/users/" + id + "/posts")
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
  const id1 = localStorage.getItem("key");
  return dispatch => {
    return database
      .ref(`users/${id1}/posts/${id}`)
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
  const id = localStorage.getItem("key");
  return dispatch => {
    return database
      .ref("users/" + id + "/comments/" + postId)
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
  const id = localStorage.getItem("key");
  return dispatch => {
    return database
      .ref("/users/" + id + "/comments")
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
export const handelRegister = user => {
  return { type: "HANDEL_REGISTER", user: user };
};

export const checkUser = user => {
  return { type: "USER_ONLOGIN", user };
};
