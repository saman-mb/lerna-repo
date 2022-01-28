class CommentsService {

  async fetchComments(blogPostId: String) {
    console.log("Fetching comments")
    return [{id: "1234", text: "This is a great post!"}]
  }
}

export default CommentsService