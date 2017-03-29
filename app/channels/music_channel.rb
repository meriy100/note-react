class MusicChannel < ApplicationCable::Channel
  def subscribed
    stream_from "host_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def add_playlist_item(data)
    playlist_item =PlaylistItem.new(playlist_item_params(data['message']))
    playlist_item.save!
    ActionCable.server.broadcast('host_channel', type: 'ADD_PLAYLIST_ITEM', payload: playlist_item.attributes)
  end

  def next_playlist(data)
    if playlist_item = PlaylistItem.find_by(id: data['playlist_item']['id'])
      playlist_item.destroy!
    end
    ActionCable.server.broadcast('host_channel', { type: 'DELETE_PLAYLIST_ITEM', payload: playlist_item.attributes })
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
