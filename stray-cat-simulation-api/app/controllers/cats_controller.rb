class CatsController < ApplicationController
  def index
    cats = Cat.all
    render json: cats
  end

  def overnight
    Cat.overnightAdventures
    user = User.first;
    user.actions = params[:action].to_i + 5;
    user.save;
  end

  def update
    cat = Cat.find_by_id(params[:id])

    cat.update(cat_params)
    if cat.save
      puts "success"
    else
      puts "FAiled"
    end
  end

   private 
  def cat_params
    params.require(:cat).permit(:id, :name, :hp, :food, :affection, :toughness)
  end

end
