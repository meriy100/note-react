class MusicChannel < ApplicationCable::Channel
  def subscribed
    stream_from "host_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def add_video(data)
    Playlist.create!(playlist_params(data['message']))
    ActionCable.server.broadcast 'host_channel', data['message']
  end

  private

  def playlist_params(message)
    {
      video_id: message['videoId'],
      url: message['url'],
      title: message['title'],
    }
  end
end
