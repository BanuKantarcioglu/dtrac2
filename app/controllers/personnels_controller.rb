class PersonnelsController < ApplicationController
  def index
    render json: Personnel.all
  end
end
