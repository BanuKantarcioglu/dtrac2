class AddDoNotTrackToDocuments < ActiveRecord::Migration[5.2]
  def change
    add_column :documents, :donottrack, :boolean
  end
end
