class PlaylistItemSerializer < ActiveModel::Serializer
  attributes :id, :video_id, :title, :url, :duration
end
