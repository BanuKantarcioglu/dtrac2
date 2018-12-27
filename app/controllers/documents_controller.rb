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

  def destroy
    @document = Document.find_by_id(params[:id])
    if @document.destroy
      head :no_content, status: :success
    else
      render json: @document.errors, status: :unprocessable_entity
    end
  end

  private
  def document_params
    params.require(:document).permit(:document_type_id,:personnel_id,:startdate,:enddate,:istracking)
  end
end
