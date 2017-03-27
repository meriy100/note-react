App.music = App.cable.subscriptions.create "MusicChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    $('#playlist').append data

  add_videos: (message) ->
    @perform 'broadcast', message: message

$(document).on 'click', '.send-playlist', ->
  console.log($(this).data('videoId'))
  App.music.add_videos($(this).data())
  event.target.value = ''
  event.preventDefault()

