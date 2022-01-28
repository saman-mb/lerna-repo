import FetchPostUserCase from "business-domain";

class BlogPresenter {
  fetchPostsUsecase = new FetchPostUserCase()
    async loadBlog(id: String) {
       const blogPost = await this.fetchPostsUsecase.fetch()
       return {title: "Lions rule!", body: "Lions live in Africa"}
    }
}

export default BlogPresenter