class DocumentTypesController < ApplicationController
  def index
    render json: DocumentType.all
  end

  def show
  #  render json: DocumentType.where( id: params[:id]) #find(params[:id])
    render json: DocumentType.find_by_id(params[:id])
  end

  def new



  end

  def edit



  end

  def create



  end

  def update



  end

  def destroy



  end
end
