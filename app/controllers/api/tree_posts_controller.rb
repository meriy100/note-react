class Api::TreePostsController < ApplicationController
  def index
    @root_tree = TreePost.tree(Post.all)
  end
end