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
    self.path.split("/").last || ""
  end
end
