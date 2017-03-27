class MusicPlayerController < ApplicationController

  def index
    @search_videio_form = SearchVideoFrom.new(params[:search_video_form])
  end
end
