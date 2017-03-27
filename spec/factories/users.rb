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

FactoryGirl.define do
  factory :user do
    
  end
end
