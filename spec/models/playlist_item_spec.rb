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

require 'rails_helper'

RSpec.describe PlaylistItem, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
