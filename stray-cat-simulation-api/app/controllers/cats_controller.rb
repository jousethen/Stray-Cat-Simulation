class CatsController < ApplicationController
  def index
    cats = Cat.all
    render json: cats
  end

  def update
    puts params;
  end
end
