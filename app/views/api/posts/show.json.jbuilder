json.set! :id, @post.id
json.set! :name, @post.name
json.set! :body, @post.body
json.set! :pathList, @post.path_list
json.set! :summaries, @post.summaries
json.set! :createdUser do
  json.set! :name, @post.created_user.name
end
