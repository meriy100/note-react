# == Schema Information
#
# Table name: users
#
#  id               :integer          not null, primary key
#  name             :string(255)
#  email            :string(255)      not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  crypted_password :string(255)
#  salt             :string(255)
#  admin            :boolean          default("0"), not null
#
# Indexes
#
#  index_users_on_email  (email) UNIQUE
#

class User < ApplicationRecord
  authenticates_with_sorcery!
  has_many :posts
  validates :password, length: { minimum: 3 }
  validates :password, confirmation: true
  validates :password_confirmation, presence: true

  validates :email, uniqueness: true

  validates :name, uniqueness: true, presence: true
end
