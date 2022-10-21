

const postList = document.querySelector('.post__list');
const postGet = document.querySelector('.posts__get-posts');

const state = {
  posts: [],
}

const createPost = (post, index) => `
<div class="post">
<div class="post__wrapper">
  <div class="wrapper__title">${post.title}</div>
  <div class="wrapper__body">${post.body}</div>
</div>
<div class="post__buttons">
  <button class="buttons__edit" onclick="editPost(${index})">Edit</button>
  <button class="buttons__delete" onclick="delPost(${index})">Delete</button>
</div>
</div>
`

const fillPostList = (posts) => {
  postList.innerHTML = '';
  if (posts.length) {
    posts.forEach((post, index) => postList.innerHTML += createPost(post, index));
  }
}

postGet.addEventListener('click', async () => {
  await getPostRequest();
  fillPostList(state.posts);
});

function getPostRequest() {
  return fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
  })
  .then((res) => res.json())
  .then((posts) => state.posts = state.posts.concat(posts));
}