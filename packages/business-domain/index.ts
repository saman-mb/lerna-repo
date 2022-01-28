import CommentsService from "comments-service";
import PostsService from "posts-service";
class FetchPostUserCase {
  commentsService = new CommentsService()
  postsService = new PostsService()
    async fetch() {
      const post = await this.postsService.fetchPosts("1234")
      const comments = await this.commentsService.fetchComments(post.id)
      return {comments: comments, post: post}
    }
}

export default FetchPostUserCase