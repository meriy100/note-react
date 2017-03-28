require 'google/api_client'

class SearchVideoForm
  include ::Virtus.model
  include ActiveModel::Model

  attr_accessor :title
  attr_reader :videos

  def initialize(args)
    super
    @videos ||= []
  end

  def persisted?
    false
  end
  DEVELOPER_KEY = ENV['YOUTUBE_KEY']
  YOUTUBE_API_SERVICE_NAME = 'youtube'
  YOUTUBE_API_VERSION = 'v3'

  def get_service
    client = Google::APIClient.new(
      key: DEVELOPER_KEY,
      authorization: nil,
      application_name: $PROGRAM_NAME,
      application_version: '1.0.0'
    )
    youtube = client.discovered_api(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION)

    @videos = client.execute!(
      api_method: youtube.search.list,
      parameters: {
        part: 'snippet',
        q: title ,#上記の検索ワードを変換する
        maxResults: 10#上記の取得数を変換する
      }
    ).data.items
  end
end
