class LinksController < ApplicationController
  def index
    @hot_links = Link.hot
    if current_user
      @links = current_user.links
    else
      @links = []
    end
  end

  def edit
    @link = Link.find(params[:id])
  end

  def update
    @link = Link.find(params[:id])
    @link.update(link_params)
    if @link.save
      redirect_to links_path
    else
      redirct_to edit_link_path(@link)
    end
  end


  private
  def link_params
    params.require(:link).permit(:url, :title)
  end
end
