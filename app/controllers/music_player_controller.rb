class MusicPlayerController < ApplicationController

  def index
    @search_video_form = SearchVideoForm.new(params[:search_video_form])
    if @search_video_form.title.present?
      @search_video_form.get_service
    end
  end
end
