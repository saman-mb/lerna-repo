class PostsService {

  async fetchPosts(postId: String) {
    console.log("Fetching posts")
    return {id: "1234", content: "This is a great post!"}
  }
}

export default PostsService