# tag = document.createElement('script')
# tag.src = 'https://www.youtube.com/iframe_api'
# firstScriptTag = document.getElementsByTagName('script')[0]
# firstScriptTag.parentNode.insertBefore tag, firstScriptTag
# 
# $(document).ready ->
#   onYouTubeIframeAPIReady = ->
#     console.log("ok")
#     ytPlayer = new YT.Player('sample',
#       width: 640
#       height: 390
#       videoId: 'bHQqvYy5KYo')
#     return
#   onYouTubeIframeAPIReady()
