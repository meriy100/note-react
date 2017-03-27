App.music = App.cable.subscriptions.create "MusicChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    $('.messages').append data['message']

  add_videos: (message) ->
    @perform 'broadcast', message: "TestMessage"

$('.btn').click ->
  App.music.add_videos "TestMessage"
  event.target.value = ''
  event.preventDefault()
