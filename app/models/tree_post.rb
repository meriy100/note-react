class TreePost
  include ActiveModel::Model
  attr_accessor :id, :children, :name, :path, :post, :dipth, :parent

  def self.tree(posts)
    TreePost.new.tap do |root_tree|
      posts.order(path: :asc).each do |post|
        root_tree.insert_post(post.path.split('/'), post)
      end
    end
  end

  def initialize(attributes = {})
    super
    @id = (1..100000).to_a.sample
    @dipth ||= 0
    @children ||= []
    @path ||= ""
    @path.gsub!(/^\//, "")
  end

  def insert_post(paths, post)
    current_path = paths.shift
    if (next_tree = find_in_children(current_path).presence)
      next_tree.insert_post(paths, post)
    else
      append(name: current_path, path: "#{path}/#{current_path}").insert_path_or_post(paths, post)
    end
  end

  def posts_count_zero?
    sum = posts_count
    sum.zero? ? '' : sum
  end

  def posts_count
    sum = 0
    children.each do |tree_post|
      sum += 1 if tree_post.post.present?
      sum += tree_post.posts_count
    end
    sum
  end

  def insert_path_or_post(paths, post)
    if paths.present?
      insert_post(paths, post)
    else
      @post = post
    end
  end

  private

  def <<(attributes = {})
    attributes[:dipth] ||= @dipth + 1
    TreePost.new(attributes).tap do |tree_post|
      @children << tree_post
    end
  end

  alias append <<

  def find_in_children(name)
    @children.find { |tree_post| tree_post.name == name }
  end
end

