class ChangeDoNotTrackToIsTrackingInDocuments < ActiveRecord::Migration[5.2]
  def change
    rename_column :documents, :donottrack, :istracking
    change_column_default(
      :documents,
      :istracking,
      true
    )
  end
end
