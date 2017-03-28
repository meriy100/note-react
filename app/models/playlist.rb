# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  order      :integer
#  video_id   :string(255)
#  url        :string(255)
#  title      :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
end
