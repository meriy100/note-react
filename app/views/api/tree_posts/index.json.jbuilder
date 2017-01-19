def json_tree(tree, json)
  json.array! tree.children do |child|
    json.set! :id, child.id
    json.set! :name, child.name
    json.set! :post, child.post
    json.set! :dipth, child.dipth
    json.set! :children do
      json_tree(child, json)
    end
  end
end

json_tree(@root_tree, json)
