class Api::AccessoriesController < ApplicationController
  def index
    accessories = Accessory.all
    render json: accessories
  end

  def update
    accessory = Accessory.find_by_id(params[:id])

    accessory.update(accessory_params)
    if accessory.save
      puts "success"
    else
      puts "FAiled"
    end
  end

  private 
  def accessory_params
    params.require(:accessory).permit(:id, :cat_id)
  end

end