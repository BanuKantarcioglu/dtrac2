class AddDefaultToDocumentTypes < ActiveRecord::Migration[5.2]
  def change
    change_column_default(
      :document_types,
      :active,
      true
    )

  end
end
