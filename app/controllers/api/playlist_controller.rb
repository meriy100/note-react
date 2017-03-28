class Api::PlaylistController < ApplicationController
  def show
    render json: Playlist.first
  end

  def destroy
    Playlist.first.destroy!
    render json: Playlist.first
  end
end
