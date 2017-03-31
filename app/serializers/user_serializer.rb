class UserSerializer < ActiveModel::Serializer
  attributes :name, :admin, :host
end
