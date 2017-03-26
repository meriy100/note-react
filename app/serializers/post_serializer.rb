class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :path, :state, :body, :path_list, :summaries, :created_user


  # XXX : belogns_to
  def created_user
    UserSerializer.new(object.created_user)
  end
end
