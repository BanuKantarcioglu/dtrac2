class DocumentsController < ApplicationController
  def index
    render json: Document.all
  end

  def create
    @document = Document.new(document_params)
    if @document.save
      render json: @document
    else
      render json: @document.errors, status: :unprocessable_entity
    end

  end


  private
  def document_params
    params.require(:document).permit(:document_type_id,:personnel_id,:status,:startdate,:enddate)
  end
end
