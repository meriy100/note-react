# == Schema Information
#
# Table name: posts
#
#  id              :integer          not null, primary key
#  path            :string(255)
#  body            :text(65535)
#  created_user_id :integer
#  updated_user_id :integer
#  deleted_at      :datetime
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  aasm_state      :string(255)
#

class Post < ApplicationRecord
  belongs_to :created_user, class_name: :User
  belongs_to :updated_user, class_name: :User

  def self.tree
    root_tree = TreePost.new
    each do |post|
      root_tree.insert_post post.path.split('/'), post
    end
    root_tree
  end

  def name
    paths.last || ""
  end

  def path_list
    least_path = ""
    paths[0..-2].map do |name|
      this_path = least_path.concat("/#{name}").gsub(/^\//, "")
      { id: this_path.hash, path: this_path, name: name }
    end
  end

  def paths
    @paths ||= path.split("/")
  end
end
