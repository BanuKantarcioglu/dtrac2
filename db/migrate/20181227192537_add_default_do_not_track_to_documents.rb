class AddDefaultDoNotTrackToDocuments < ActiveRecord::Migration[5.2]
  def change
    change_column_default(
      :documents,
      :donottrack,
      false
    )
  end
end
