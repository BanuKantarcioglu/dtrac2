class RemoveStatusFromDocuments < ActiveRecord::Migration[5.2]
  def change
    remove_column :documents, :status, :integer
  end
end
