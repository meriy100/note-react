# == Schema Information
#
# Table name: users
#
#  id               :integer          not null, primary key
#  name             :string(255)
#  email            :string(255)      not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  joinyear         :integer
#  role             :integer
#  status           :integer
#  description      :text(65535)
#  crypted_password :string(255)
#  salt             :string(255)
#
# Indexes
#
#  index_users_on_email  (email) UNIQUE
#

FactoryGirl.define do
  factory :user do
    
  end
end
