class MusicChannel < ApplicationCable::Channel
  def subscribed
    stream_from "host_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def add_playlist_item(data)
    PlaylistItem.create!(playlist_item_params(data['message']))
    ActionCable.server.broadcast('host_channel', type: 'QUERY_PLAYLIST', payload: PlaylistItem.onplaylist.order(updated_at: :asc).map(&:attributes))
  end

  def destroy_playlist_item(data)
    if playlist_item = PlaylistItem.find_by(id: data['playlist_item']['id'])
      playlist_item.destroy!
    end
    ActionCable.server.broadcast('host_channel', { type: 'QUERY_PLAYLIST', payload: PlaylistItem.onplaylist.order(updated_at: :asc).map(&:attributes) })
  end

  def end_playlist_item(data)
    if playlist_item = PlaylistItem.find_by(id: data['playlist_item']['id'])
      playlist_item.virtual!
    end
    if PlaylistItem.onplaylist.count < 2
      PlaylistItem.virtual.sample(3).map(&:onplaylist!)
    end
    ActionCable.server.broadcast('host_channel', { type: 'QUERY_PLAYLIST', payload: PlaylistItem.onplaylist.order(updated_at: :asc).map(&:attributes) })
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
