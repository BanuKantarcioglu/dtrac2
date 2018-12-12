class CreateDocuments < ActiveRecord::Migration[5.2]
  def change
    create_table :documents do |t|
      t.date :startdate
      t.date :enddate
      t.integer :status
      t.references :personnel, foreign_key: true
      t.references :document_type, foreign_key: true

      t.timestamps
    end
  end
end
