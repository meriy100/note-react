class MusicChannel < ApplicationCable::Channel
  def subscribed
    stream_from "host_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def hoge(data) 
    ActionCable.server.broadcast 'host_channel', data
  end
end
