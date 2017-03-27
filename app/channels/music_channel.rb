class MusicChannel < ApplicationCable::Channel
  def subscribed
    stream_from "host_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def broadcast(data)
    html = "
    <li class='list-group-item' data-video-id=#{data['message']['videoId']}>
      <img src=#{data['message']['url']} />
      span#{data['message']['title']}
    </li>
    "
    ActionCable.server.broadcast 'host_channel', html
  end
end
