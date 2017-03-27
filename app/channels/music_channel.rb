class MusicChannel < ApplicationCable::Channel
  def subscribed
    stream_from "host_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def broadcast(data)
    Playlist.create!(playlist_params(data['message']))
    html = "
    <li class='list-group-item' data-video-id=#{data['message']['videoId']}>
      <img src=#{data['message']['url']} />
      span#{data['message']['title']}
    </li>
    "
    ActionCable.server.broadcast 'host_channel', html
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
