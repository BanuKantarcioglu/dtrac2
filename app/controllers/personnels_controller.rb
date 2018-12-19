class PersonnelsController < ApplicationController
  def index
    if params[:showinactive] == "true"  #TODO handle boolean params
      render json: Personnel.all # show everyone
    else
      render json: Personnel.where(status: true) # show only active
    end

  end

  def create
    @personnel = Personnel.new(personnel_params)
    if @personnel.save
      render json: @personnel
    else
      render json: @personnel.errors, status: :unprocessable_entity
    end

  end

  private
  def personnel_params
    params.require(:personnel).permit(:name, :pno, :jobdescription,:status)
  end
end
