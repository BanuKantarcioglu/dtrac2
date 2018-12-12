class CreatePersonnels < ActiveRecord::Migration[5.2]
  def change
    create_table :personnels do |t|
      t.string :name
      t.integer :pno
      t.string :jobdescription
      t.boolean :status

      t.timestamps
    end
  end
end
