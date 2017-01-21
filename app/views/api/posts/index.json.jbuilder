json.array! @posts do |post|
  json.set! :id, post.id
  json.set! :name, post.name
  json.set! :path, post.path
  json.set! :pathList, post.path_list
  json.set! :createdUser do
    json.set! :name, post.created_user.name
  end
end
