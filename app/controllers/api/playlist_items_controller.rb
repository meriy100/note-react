class Api::PlaylistItemsController < ApplicationController
  def index
    @playlist_items = PlaylistItem.all
    render json: @playlist_items
  end

  def destroy
    render json: PlaylistItem.first
  end
end
