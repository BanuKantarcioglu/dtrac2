class AddDefaultToDocumentTypes < ActiveRecord::Migration[5.2]
  def change
    change_column_default(
      :document_types,
      :active,
      true
    )
    #BK add default value to a column in a table that is already created
  end
end
