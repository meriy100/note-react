class TreePostSerializer < ActiveModel::Serializer
  attributes :id, :name, :path, :post, :dipth, :posts_count, :child_visible, :children

  def child_visible
    false
  end

  def children
    object.children.map do |child|
      TreePostSerializer.new(child)
    end
  end
end

