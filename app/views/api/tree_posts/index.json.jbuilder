def json_tree(tree, json)
  json.array! tree.children do |child|
    json.set! :id, child.path.hash
    json.set! :name, child.name
    json.set! :path, child.path
    json.set! :post, child.post
    json.set! :dipth, child.dipth
    json.set! :postCount, child.posts_count
    json.set! :childVisible, false
    json.set! :children do
      json_tree(child, json)
    end
  end
end

json_tree(@root_tree, json)