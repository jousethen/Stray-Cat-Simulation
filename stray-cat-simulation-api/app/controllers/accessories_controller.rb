class AccessoriesController < ApplicationController
  def index
    accessories = Accessory.all
    render json: accessories
  end

end