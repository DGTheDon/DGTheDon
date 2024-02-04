const appConfig = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  SIGNUP_SUCCESS: "SIGNUP_SUCCESS",
  POST_CREATED: "POST_CREATED",
  POST_DELETED: "POST_DELETED",
};

const loginUser = async (username, password) => {
  // Implement login logic here
};

const signupUser = async (username, password, email) => {
  // Implement signup logic here
};

const createPost = async (title, content) => {
  // Implement post creation logic here
};

const deletePost = async (postId) => {
  // Implement post deletion logic here
};

const fetchPosts = async () => {
  // Implement fetching posts logic here
};

document.getElementById("loginForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const password = event.target.password.value;
  await loginUser(username, password);
});

document.getElementById("signupForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const password = event.target.password.value;
  const email = event.target.email.value;
  await signupUser(username, password, email);
});

document.getElementById("createPostBtn").addEventListener("click", async () => {
  const title = document.getElementById("postTitle").value;
  const content = document.getElementById("postContent").value;
  await createPost(title, content);
});

document.getElementById("postList").addEventListener("click", async (event) => {
  if (event.target.classList.contains("deletePostBtn")) {
    const postId = event.target.dataset.postId;
    await deletePost(postId);
  }
});

fetchPosts();