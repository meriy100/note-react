class MusicChannel < ApplicationCable::Channel
  def subscribed
    stream_from "host_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def add_playlist_item(data)
    PlaylistItem.create!(playlist_item_params(data['message']))
    ActionCable.server.broadcast('host_channel', type: 'QUERY_PLAYLIST', payload: PlaylistItem.all.map(&:attributes))
  end

  def next_playlist(data)
    if playlist_item = PlaylistItem.find_by(id: data['playlist_item']['id'])
      playlist_item.destroy!
    end
    ActionCable.server.broadcast('host_channel', { type: 'QUERY_PLAYLIST', payload: PlaylistItem.all.map(&:attributes) })
  end

  private

  def playlist_item_params(message)
    {
      video_id: message['videoId'],
      url: message['url'],
      title: message['title'],
    }
  end
end
